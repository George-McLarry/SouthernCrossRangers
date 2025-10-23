# Audio Files for Southern Cross Rangers

This directory contains the audio files for the music player.

## Supported Formats
- WAV files (.wav)
- MP3 files (.mp3)

## File Structure
```
public/audio/
├── The One You Need.wav
├── Being Near Is Better.wav
├── We Will Meet Again.wav
└── README.md
```

## Adding Audio Files
To add your own audio files:

1. Place your audio files in this directory
2. Update the `tracks` array in `components/MusicPlayer.tsx` to include your files
3. Ensure file names match the `src` property in the track objects

## File Naming Convention
- Use descriptive names that match the song titles
- Avoid spaces in filenames (use underscores or hyphens instead)
- Keep file sizes reasonable for web playback

## Browser Compatibility
- WAV files: Supported in all modern browsers
- MP3 files: Supported in all modern browsers
- For best compatibility, provide both formats if possible



