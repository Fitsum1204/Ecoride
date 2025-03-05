#!/bin/bash

# 🚀 Define variables
SERVER="ubuntu@44.224.151.26"  # Replace with your actual server IP
SSH_KEY="C:\Users\forfr\.ssh\id_rsa"  # Path to your private SSH key
LOCAL_BUILD_PATH="C:\Users\forfr\ecoride\build/*"  # Path to your local build folder
REMOTE_PATH="/var/www/ecoride"  # Path to the deployment folder on your server

echo "🚀 Starting Deployment..."

# 🟢 Step 1: Connect to the server and set permissions
ssh -i "$SSH_KEY" $SERVER << EOF
    echo "🔹 Setting permissions before upload..."
    sudo chown -R ubuntu:ubuntu $REMOTE_PATH
    sudo chmod -R 777 $REMOTE_PATH
EOF

# 🟢 Step 2: Upload the latest build files
echo "📤 Uploading files..."
scp -i "$SSH_KEY" -r "$LOCAL_BUILD_PATH" $SERVER:$REMOTE_PATH

# 🟢 Step 3: Fix file ownership and permissions after upload
ssh -i "$SSH_KEY" $SERVER << EOF
    echo "🔹 Fixing file permissions after upload..."
    sudo chmod -R 755 $REMOTE_PATH
    sudo chown -R www-data:www-data $REMOTE_PATH
    echo "✅ Deployment Successful!"
EOF
