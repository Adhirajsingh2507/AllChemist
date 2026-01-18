# Allchemist - Deployment Guide

This folder contains the complete source code for the Allchemist website.

## 📂 Project Structure

```
allchemist/
├── index.html        # Main HTML file
├── style.css         # Styles and variables
├── script.js         # Animation logic
└── assets/           # Images and animation frames
    ├── arijit_roy.jpg
    └── frames/       # 192 sequence images for hero animation
```

## 🚀 How to Deploy

Since this is a **static website** (HTML/CSS/JS), you can deploy it on any static hosting service.

### Option 1: Temporary Local Server (Python)
If you have Python installed, you can preview the site locally:
1. Open a terminal in this folder.
2. Run: 
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

### Option 2: Netlify / Vercel / GitHub Pages
1. **Netlify**: Drag and drop this `allchemist` folder onto the Netlify dashboard.
2. **Vercel**: Install Vercel CLI (`npm i -g vercel`) and run `vercel deploy` inside this folder.
3. **GitHub Pages**: Push this code to a repository and enable GitHub Pages in settings.

## ⚠️ Requirements
- No build step is required.
- No Node.js required.
- Works in all modern browsers.

## 📝 Credits
- **Design & Dev**: Allchemist Team
- **Contact**: techadhiraj07@gmail.com
