from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash
import re

def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email)

app = Flask(__name__)
CORS(app)

# ------------------ DATABASE CONNECTION ------------------
db = mysql.connector.connect(
    host="localhost",
    user="appuser",
    password="appuser123",
    database="melofi"
)
cursor = db.cursor(dictionary=True)

# ------------------ HEALTH CHECK ------------------
@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"message": "backend is running"}), 200

# ------------------ SIGNUP ------------------
@app.route("/Register", methods=["POST"])
def Register():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON"}), 400
    email = data.get("email", "").strip()
    password = data.get("password", "").strip()
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    if not is_valid_email(email):
        return jsonify({"error": "Invalid email format"}), 400
    cursor.execute(
        "SELECT id FROM users WHERE email = %s",
        (email,)
    )
    if cursor.fetchone():
        return jsonify({"error": "User already exists"}), 409
    hashed_password = generate_password_hash(password)
    cursor.execute(
        "INSERT INTO users (email, password) VALUES (%s, %s)",
        (email, hashed_password)
    )
    db.commit()
    return jsonify({"message": "Signup successful"}), 201

# ------------------ LOGIN ------------------
@app.route("/Login", methods=["POST"])
def Login():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON"}), 400
    email = data.get("email", "").strip()
    password = data.get("password", "").strip()
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    # 1️⃣ Fetch user by email
    cursor.execute(
        "SELECT id, password FROM users WHERE email = %s",
        (email,)
    )
    user = cursor.fetchone()
    # 2️⃣ Validate credentials
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid email or password"}), 401
    return jsonify({
        "message": "Login successful",
        "user_id": user["id"]
    }), 200

# ------------------ RUN APP ------------------
if __name__ == "__main__":
    app.run(debug=True)
