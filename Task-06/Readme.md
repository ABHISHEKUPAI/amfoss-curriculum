to set up mysql follow this procedure 

STEP 1] mysql -u root -p
   Enter your MySQL root password.
STEP 2] CREATE DATABASE melofi;
STEP 3] CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'Melofi@123';
STEP 4] GRANT ALL PRIVILEGES ON melofi.* TO 'appuser'@'localhost';
STEP 5] FLUSH PRIVILEGES;

you need to make tables in the database called melofi 

step 6] use melofi
step 7]
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

step 8]
CREATE TABLE playlist_songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  playlist_id INT NOT NULL,
  title VARCHAR(255),
  artist VARCHAR(255),
  image VARCHAR(500),
  song_url VARCHAR(500),
);

step 9]
CREATE TABLE playlists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  );

now inside the folder create a virtual env 

python3 -m venv venv

then activate it 
source venv/bin/activate

once you are in virtual env 

run python app.py 
the backend is running successfully setup 



