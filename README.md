# ⚡ PurePulse — Elite Web Design & Digital Roster

> **Your website, built right. Clean, fast, professional websites — built to perform and built to last.**  
> Inspired by the kinetic roster architecture of **[Night Media](https://www.night.co/talent)** and engineered for 100/100 Google Lighthouse performance. Starts with a flat **$150 deposit**.

---

## 🚀 Overview

PurePulse is an independent web design and development studio crafted by **Matt Hagen** in Omaha, NE. This application features:

- 🏎️ **Atomic Speed & Sub-Second Loads**: 100/100 Lighthouse targets with zero framework bloat.
- ⚡ **Night.co-Style Dynamic Roster**: Filterable project gallery with live domain cards, instant search, and deep-dive architectural inspection modals.
- 🎛️ **Interactive Studio Lab**: Live Core Web Vitals audit simulator (FCP, CLS, TBT) and responsive multi-device viewport tester (Desktop, Tablet, Mobile).
- 🔊 **Tactile Web Audio Synthesizer**: Subtle client-side sound design for interactive clicks and feedback.
- 💰 **$150 Launchpad Model**: Interactive pricing calculator for Starter ($20/mo), Growth ($50/mo), and Premium ($75/mo) plans with instant deposit quote generation.
- 📱 **Mobile & PWA Ready**: Flawless responsive layout on all devices with dark-mode aesthetic.

---

## 🖥️ Deploying on Ubuntu Server

Here are step-by-step instructions to deploy PurePulse on an Ubuntu Server (20.04, 22.04, or 24.04 LTS).

### 1. System Preparation & Node.js Installation

SSH into your Ubuntu server and install Git, Node.js (v20+ or v22+ LTS), and Nginx:

```bash
# Update package lists
sudo apt update && sudo apt upgrade -y

# Install Node.js 22 LTS via NodeSource
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs git nginx certbot python3-certbot-nginx

# Verify versions
node -v  # v22.x.x
npm -v   # 10.x.x
```

---

### 2. Clone & Build the Application

Clone your repository to `/var/www/purepulse` or your preferred directory:

```bash
# Create directory and set permissions
sudo mkdir -p /var/www/purepulse
sudo chown -R $USER:$USER /var/www/purepulse

# Clone your repository
git clone https://github.com/Mattjhagen/PurePulse.git /var/www/purepulse
cd /var/www/purepulse

# Install dependencies
npm install

# Build the production bundle
npm run build
```

This compiles optimized static assets into the `/var/www/purepulse/dist` directory.

---

### 3. Option A: Serve with Nginx (Recommended — Fastest & Best SEO)

Nginx serves static SPA files directly with ultra-low memory footprint and sub-millisecond response times.

1. **Create an Nginx server block**:

```bash
sudo nano /etc/nginx/sites-available/purepulse
```

2. **Paste the following configuration** (replace `purepulse.one` with your domain or server IP):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name purepulse.one www.purepulse.one;

    root /var/www/purepulse/dist;
    index index.html;

    # Enable Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/x-javascript application/xml application/json image/svg+xml;

    # Cache static assets (images, fonts, scripts)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, no-transform, immutable";
        access_log off;
    }

    # Serve favicon and root assets
    location ~* \.(svg|ico|png|jpg|jpeg|webp)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # SPA routing: fallback to index.html for client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

3. **Enable the site and test Nginx**:

```bash
sudo ln -s /etc/nginx/sites-available/purepulse /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

4. **Install Free SSL via Let's Encrypt**:

```bash
sudo certbot --nginx -d purepulse.one -d www.purepulse.one
```

Certbot will automatically configure HTTPS certificates and auto-renewal.

---

### 4. Option B: Serve with PM2 / Node.js Server

If you prefer running a Node.js process with PM2:

1. **Install PM2 globally**:

```bash
sudo npm install -g pm2
```

2. **Start the Vite production preview or static server**:

```bash
cd /var/www/purepulse
pm2 start "npm run preview -- --port 3000 --host 0.0.0.0" --name "purepulse"

# Set PM2 to automatically restart on server reboots
pm2 startup
pm2 save
```

3. **Proxy Nginx to port 3000**:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

---

### 5. Automated Updates / Deployment Script

Whenever you push changes, update your server with this one-liner script:

```bash
#!/usr/bin/env bash
cd /var/www/purepulse
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
echo "✅ PurePulse updated successfully!"
```

Save it as `deploy.sh`, make it executable (`chmod +x deploy.sh`), and run `./deploy.sh` whenever you want to deploy!

---

## 🛠️ Local Development

To run the application locally on your computer:

```bash
# 1. Clone repository
git clone https://github.com/Mattjhagen/PurePulse.git
cd PurePulse

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
├── index.html                   # Entry point with SEO metadata & Google Fonts
├── metadata.json                # Project identity & applet capabilities
├── package.json                 # Node dependencies and build scripts
├── public/
│   ├── favicon.svg              # PurePulse neon pulse SVG favicon
│   └── assets/images/           # Static production images
├── src/
│   ├── assets/images/           # Source high-resolution showcase assets
│   ├── components/
│   │   ├── Header.tsx           # 3-Zone Top Bar with sound toggle & CTA
│   │   ├── Hero.tsx             # Interactive device frame & accent switcher
│   │   ├── Marquee.tsx          # Kinetic continuous domain stream
│   │   ├── RosterSection.tsx    # Night.co-style filterable project grid
│   │   ├── ProjectModal.tsx     # Deep-dive inspection modal with metrics
│   │   ├── CapabilitiesSection.tsx # Numbered superpowers & spotlight
│   │   ├── InteractiveStudio.tsx# Speed benchmark & device sandbox
│   │   ├── PricingCalculator.tsx# $150 deposit package & booking modal
│   │   ├── FounderSection.tsx   # Direct service with Matt Hagen & FAQ
│   │   └── Footer.tsx           # Clean copyright and social links
│   ├── data/
│   │   ├── projectsData.ts      # 12 PurePulse live client projects
│   │   └── capabilitiesData.ts  # 6 Core engineering capabilities
│   ├── utils/
│   │   └── audio.ts             # Client-side Web Audio synthesizer
│   ├── App.tsx                  # Main layout & modal controller
│   ├── index.css                # Tailwind CSS v4 & custom animations
│   └── main.tsx                 # React DOM root mounting
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite bundler configuration
```

---

## 📬 Contact & Support

- **Founder & Developer**: Matt Hagen
- **Email**: [matty@purepulse.one](mailto:matty@purepulse.one)
- **Website**: [purepulse.one](https://purepulse.one)
- **GitHub**: [github.com/Mattjhagen/PurePulse](https://github.com/Mattjhagen/PurePulse)
