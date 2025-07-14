#!/bin/sh
# wait-for.sh

set -e

host="$1"
shift
cmd="$@"

until nc -z "$host" 27017; do
  echo "⏳ Waiting for MongoDB at $host:27017..."
  sleep 2
done

echo "✅ MongoDB is up - executing command"
exec $cmd
