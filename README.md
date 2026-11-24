# Assignment 7 — React Multi-Page App (P6 — Music Playlist)

## Student Details
- **Name:** Saif Ullah Jafri
- **UID / Roll Number:** 2365717615
- **Assigned Problem Statement:** P6 — Music Playlist
- **GitHub Repository:** https://github.com/Saifjafri212213/saifullah-midsem-phase2
- **Live Vercel Deployment Link:** https://saifullah-midsem-phase2.vercel.app

## Features & Implementation
- **Dataset:** Local dataset `src/data/songs.js`.
- **Reusable SongCard:** Displays title, artist, genre, formatted duration (`m:ss`), `Trending 🔥` badge for songs with >= 1,000,000 streams, and "Add to Playlist" / "Remove from Playlist" toggle action button.
- **Duration Helper Function:** Converts seconds to `m:ss` (e.g., 268 → 4:28).
- **Search & Filter:** Search by song title and dropdown filter by genre (All, Romantic, Motivational, Sufi, Punjabi).
- **Home Page (`/`):** Summary counts for total songs, songs in playlist, and trending songs.
- **Songs List Page (`/songs`):** Searchable and filterable songs list.
- **Song Details Page (`/songs/:id`):** Displays album, year, streams, and full song details with playlist toggle.
- **Playlist Page (`/playlist`):** Displays all songs added to the playlist with total duration in `m:ss` or "Your playlist is empty" when empty.
- **State Management:** Application state maintained in `App.jsx` using `useState`. State persists across navigation using React Router's `<Link>`.

## Instructions to Install Dependencies and Run the Application

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```
