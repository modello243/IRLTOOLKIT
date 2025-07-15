# IRLToolkit

## Overview
- Live ingest: RTMP & SRT → HLS/DASH
- Overlay Manager for OBS browser source
- Full OAuth (Twitch, Google)
- Bot alerts (Discord, Telegram)
- Cloud DVR upload (S3, B2)
- Scheduler API & UI
- Admin tools: ban, reset keys, delete, stats
- Analytics storage & CSV export
- Monitoring & health checks

## Deployment Steps

1. **Copy `.env.example` to `.env`** and fill in all required environment variables:
   - `DATABASE_URL` (e.g., `postgresql://user:password@localhost:5432/irltoolkit`)
   - OAuth credentials (`TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`)
   - Bot tokens (`DISCORD_TOKEN`, `TELEGRAM_TOKEN`)
   - Cloud storage buckets (`S3_BUCKET`, `B2_BUCKET`)
   - `WEBHOOK_URL`
   - `DOMAIN` (your domain name)

2. **Database Migrations**  
   Ensure PostgreSQL is running and reachable.  
   ```bash
   cd backend
   npm ci
   npm run migrate
   ```

3. **Install Dashboard Dependencies**  
   ```bash
   cd ../dashboard
   npm ci
   ```

4. **Configure SSL/TLS**  
   - Point your `DOMAIN` to the server’s public IP.  
   - Obtain and install Let’s Encrypt certificates with Certbot:
     ```bash
     sudo apt update
     sudo apt install certbot python3-certbot-nginx
     sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
     ```

5. **Start Services with Docker Compose**  
   ```bash
   cd ..
   docker-compose up --build -d
   ```

6. **Access Your IRLToolkit**  
   - Backend API: `https://yourdomain.com` (proxied by Nginx)  
   - Dashboard: `https://yourdomain.com:3001`  
   - RTMP ingest: `rtmp://yourdomain.com:1935/live/STREAM_KEY`  
   - SRT ingest: `srt://yourdomain.com:7147?streamid=STREAM_KEY`  
   - HLS playback: `https://yourdomain.com/hls/live/STREAM_KEY.m3u8`  
   - Metrics (Prometheus): `https://yourdomain.com/metrics`

7. **Device & Stream Key Management**  
   In the dashboard, use the **Device Manager** to register your mobile and desktop devices, and activate the one you want for streaming handoff.

---

For further customization or troubleshooting, refer to the in-code comments and API documentation at `https://yourdomain.com/api-docs`.
