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
title           | string    | not null
description     | string    | not null
cover_img       | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed

##instructions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
step_title      | string    | not null
step_detail     | text      | not null
media_url       | text      | not null
project_id      | id        | not null, indexed, foreign key (references project)

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references project), indexed
body        | text      | not null
