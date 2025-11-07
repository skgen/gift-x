#!/bin/bash

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env not found"
    exit 1
fi

docker exec -i $CONTAINER_ID bash -c "psql -U $POSTGRES_USER -d $POSTGRES_DB -f /var/lib/postgresql/backups/$1"
