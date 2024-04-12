
## データベース構成図
データベース構成を以下の図に示す。
```mermaid
erDiagram
    profiles ||--o{ histories:"1:N"
    profiles ||--o{ infomations:"1:N"

    profiles {
        INT id PK
        VARCHAR name 
    }

    histories {
        INT id PK
        VARCHAR profile_id FK
        VARCHAR event_name
        VARCHAR tag
        VARCHAR img_path
        DATETIME make_time
        VARCHER microcms_api   
    }

     infomations {
        INT id PK
        INT profile_id FK
        INT title_name FK
        VARCHER microcms_api
    }
```