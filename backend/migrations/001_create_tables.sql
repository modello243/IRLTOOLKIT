-- 001_create_tables.sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  schedule TEXT NOT NULL,
  command TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
