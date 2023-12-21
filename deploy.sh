#!/bin/sh

# Stop script on first error
set -e

IMAGE_NAME="next-app"

# Decode SSH key
echo "${SSH_KEY}" | base64 -d > ssh_key
# private keys need to have strict permission to be accepted by SSH agent
chmod 600 ssh_key 

# Add production server to known hosts
echo "${SERVER_PUBLIC_KEY}" | base64 -d >> ~/.ssh/known_hosts

# Deploy to production server
ssh -i ssh_key "root@${SERVER_HOSTNAME}" \
"git pull origin main \
&& git checkout main \
&& docker compose build --no-cache ${IMAGE_NAME} \
&& docker compose down ${IMAGE_NAME} \
&& docker compose up -d ${IMAGE_NAME} \
&& docker system prune -af"

echo "Successfully deployed!"