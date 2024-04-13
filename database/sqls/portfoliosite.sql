-- profiles テーブルの定義
CREATE TABLE profiles (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- histories テーブルの定義
CREATE TABLE histories (
    id INT PRIMARY KEY,
    profile_id INT,
    event_name VARCHAR(255),
    tag VARCHAR(255),
    img_path VARCHAR(255),
    make_time VARCHAR(255),
    contents TEXT,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- about テーブルの定義
CREATE TABLE about (
    id INT PRIMARY KEY,
    profile_id INT,
    title VARCHAR(255),
    markdown TEXT,
    FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
);
