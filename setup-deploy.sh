#!/bin/bash
set -e
echo "Installing backend dependencies..."
cd backend
npm ci
echo "Running migrations..."
npm run migrate
echo "Installing dashboard dependencies..."
cd ../dashboard
npm ci
echo "Starting services with Docker Compose..."
cd ..
docker-compose up --build -d
echo "Deployment complete."
