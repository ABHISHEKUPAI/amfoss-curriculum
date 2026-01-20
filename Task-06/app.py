from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import requests
from werkzeug.security import generate_password_hash, check_password_hash
import re

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="appuser",
    password="Melofi@123",
    database="melofi"
)
cursor = db.cursor(dictionary=True)

def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email)

@app.route("/songs", methods=["GET"])
def get_songs():
    term = request.args.get("query", "rock")

    response = requests.get(
        "https://itunes.apple.com/search",
        params={
            "term": term,
            "entity": "song",
            "limit": 10
        }
    )

    results = response.json().get("results", [])

    return jsonify([
        {
            "title": t.get("trackName"),
            "artistname": t.get("artistName"),
            "image": t.get("artworkUrl100"),
            "previewurl": t.get("previewUrl"),
        } for t in results
    ]), 200

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email", "").strip()
    password = data.get("password", "").strip()

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400

    if not is_valid_email(email):
        return jsonify({"error": "Invalid email"}), 400

    cursor.execute("SELECT id FROM users WHERE email=%s", (email,))
    if cursor.fetchone():
        return jsonify({"error": "User exists"}), 409

    cursor.execute(
        "INSERT INTO users (email, password) VALUES (%s,%s)",
        (email, generate_password_hash(password))
    )
    db.commit()

    user_id = cursor.lastrowid

    cursor.execute(
        "INSERT INTO playlists (user_id, name) VALUES (%s,%s)",
        (user_id, "Liked Songs")
    )
    db.commit()

    return jsonify({"user_id": user_id}), 201

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email", "")
    password = data.get("password", "")

    cursor.execute(
        "SELECT id, password FROM users WHERE email=%s",
        (email,)
    )
    user = cursor.fetchone()

    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({"user_id": user["id"]}), 200

@app.route("/playlists", methods=["GET"])
def get_playlists():
    user_id = request.args.get("user_id")

    if not user_id:
        return jsonify({"error": "user_id required"}), 400

    cursor.execute(
        "SELECT id, name FROM playlists WHERE user_id=%s",
        (user_id,)
    )
    return jsonify(cursor.fetchall()), 200

@app.route("/playlists", methods=["POST"])
def add_playlist():
    data = request.get_json()
    user_id = data.get("user_id")
    name = data.get("name")

    if not user_id or not name:
        return jsonify({"error": "user_id and name required"}), 400

    cursor.execute(
        "INSERT INTO playlists (user_id, name) VALUES (%s,%s)",
        (user_id, name)
    )
    db.commit()

    return jsonify({
        "id": cursor.lastrowid,
        "user_id": user_id,
        "name": name
    }), 201

@app.route("/playlist/add-song", methods=["POST"])
def add_song_to_plst():
    data = request.get_json()

    playlist_id = data.get("playlist_id")
    title = data.get("title")
    artist = data.get("artistname")
    image = data.get("image")
    song_url = data.get("previewurl")   

    if not playlist_id or not title:
        return jsonify({"error": "playlist_id and title required"}), 400

    cursor.execute(
        """
        SELECT id FROM playlist_songs
        WHERE playlist_id=%s AND title=%s AND artist=%s
        """,
        (playlist_id, title, artist)
    )
    if cursor.fetchone():
        return jsonify({"message": "Song already exists in playlist"}), 409

    cursor.execute(
        """
        INSERT INTO playlist_songs
        (playlist_id, title, artist, image, song_url)
        VALUES (%s, %s, %s, %s, %s)
        """,
        (playlist_id, title, artist, image, song_url)
    )
    db.commit()

    return jsonify({
        "message": "Song added to playlist",
        "song_id": cursor.lastrowid
    }), 201

@app.route("/playlist/<int:playlist_id>/songs", methods=["GET"])
def get_playlist_songs(playlist_id):
    cursor.execute(
        """
        SELECT id, title, artist, image, song_url
        FROM playlist_songs
        WHERE playlist_id=%s
        """,
        (playlist_id,)
    )
    return jsonify(cursor.fetchall()), 200



@app.route("/playlist/<int:playlist_id>", methods=["DELETE"])
def delete_playlist(playlist_id):
    cursor.execute(
        "DELETE FROM playlist_songs WHERE playlist_id=%s",
        (playlist_id,)
    )
    cursor.execute(
        "DELETE FROM playlists WHERE id=%s",
        (playlist_id,)
    )
    db.commit()
    return jsonify({"message": "Playlist deleted"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
