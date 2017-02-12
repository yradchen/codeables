# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## projects
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, unique
cover_img       | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed

##descriptions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | id        | not null, indexed, foreign key (references project)
step_title      | string    | not null
step_url        | string    | not null
step_description| text      | not null
image_video_url | string    |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references project), indexed
body        | text      | not null
