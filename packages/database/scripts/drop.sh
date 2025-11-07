#!/bin/bash

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env not found"
    exit 1
fi

SQL_COMMANDS="
DROP DATABASE $POSTGRES_DB WITH (FORCE);
CREATE DATABASE $POSTGRES_DB;
"

docker exec -i $CONTAINER_ID bash -c "psql -U $POSTGRES_USER -d postgres" <<< "$SQL_COMMANDS"
