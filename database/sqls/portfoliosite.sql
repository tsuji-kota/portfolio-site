CREATE TABLE profiles (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE histories (
    id INT PRIMARY KEY,
    profile_id INT,
    event_name VARCHAR(255),
    tag VARCHAR(255),
    img_path VARCHAR(255),
    make_time DATETIME,
    microcms_api VARCHAR(255),
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE TABLE informations (
    id INT PRIMARY KEY,
    profile_id INT,
    title_name INT, 
    microcms_api VARCHAR(255),
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE

);
