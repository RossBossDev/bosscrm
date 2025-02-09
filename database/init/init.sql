-- this is run when the database is created in the docker-compose.yml file

CREATE USER adonis with encrypted password 'adonis';

CREATE DATABASE bosscrm_app;

\connect bosscrm_app postgres;

-- Make adonis the owner of the public schema
ALTER SCHEMA public OWNER TO adonis;

GRANT ALL PRIVILEGES ON DATABASE bosscrm_app TO adonis;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO adonis;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO adonis;
GRANT ALL PRIVILEGES ON SCHEMA public TO adonis;
GRANT CREATE ON SCHEMA public TO adonis;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO adonis;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO adonis;
