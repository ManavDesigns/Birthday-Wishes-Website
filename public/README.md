# User Assets Guide

### 🎵 Background Music
To use your own song:
1. Copy your audio file into this folder and name it `music.mp3` (so its path is `public/music.mp3`).
2. When visitors press **YES 💗** or the music button, your song will play in a loop.
3. If no file is added, the website automatically plays a gentle music-box birthday lullaby chime using the Web Audio API.

---

### 📸 Photos
To use your own photos:
1. Put your pictures in `public/photos/` (e.g. `photo1.jpg`, `photo2.jpg`, etc.).
2. Open `src/config/birthday.js` and update the `photos` list with:
   ```javascript
   {
     id: 1,
     src: '/photos/photo1.jpg',
     alt: 'Description',
     caption: 'Your personal caption here ✨',
   }
   ```
3. You can add as many photos as you like!

