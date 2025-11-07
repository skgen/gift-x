#!/bin/bash

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env not found"
    exit 1
fi

docker exec -i $CONTAINER_ID bash -c "pg_dump -U $POSTGRES_USER -d $POSTGRES_DB -f /var/lib/postgresql/backups/backup_$(date +%Y-%m-%d_%H-%M-%S).sql"
