#!/bin/sh
# Stop script on first error
set -e

IMAGE_NAME="next-app"
APP_PATH="/srv/next-app"

echo "Deploying to production server..."

# Decode SSH key
echo "${SSH_KEY}" > ssh_key
# private keys need to have strict permission to be accepted by SSH agent
# chmod 600 ssh_key 

# Add production server to known hosts
mkdir -p ~/.ssh
touch ~/.ssh/known_hosts
echo "${SERVER_PUBLIC_KEY}" >> ~/.ssh/known_hosts

# Deploy to production server
ssh -i ssh_key "${SERVER_HOSTNAME}" \
"cd ${APP_PATH} \
git pull origin feature/docker-compose \
&& git checkout feature/docker-compose \
&& docker compose build --no-cache ${IMAGE_NAME} \
&& docker compose down ${IMAGE_NAME} \
&& docker compose up -d ${IMAGE_NAME} \
&& docker system prune -af"

echo "Successfully deployed!"

# Clean up
rm ssh_key