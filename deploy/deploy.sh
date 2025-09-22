#!/bin/bash
set -e

cd /home/ubuntu/japanese-course-app
git pull origin main

cd frontend
npm ci
npm run build
sudo rm -rf /var/www/japanese-course/*
sudo cp -r build/* /var/www/japanese-course/

cd ../backend
npm ci
pm2 restart japanese-backend || pm2 start src/app.js --name japanese-backend

sudo systemctl reload nginx

echo "Deploy complete!"
