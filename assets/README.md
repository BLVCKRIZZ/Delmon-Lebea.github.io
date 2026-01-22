Placeholder favicon assets created by the assistant.

Files:
- favicon.svg (general SVG favicon)
- favicon-32x32.svg
- favicon-16x16.svg
- apple-touch-icon.svg
- safari-pinned-tab.svg

These are simple SVG placeholders. Replace them with your real PNG/ICO files for widest compatibility.

Quick local ImageMagick commands to generate PNGs and an ICO from a source PNG (`dog_logo-removebg.png`):

```powershell
magick convert assets/dog_logo-removebg.png -resize 32x32 assets/favicon-32x32.png
magick convert assets/dog_logo-removebg.png -resize 16x16 assets/favicon-16x16.png
magick convert assets/dog_logo-removebg.png -resize 180x180 assets/apple-touch-icon.png
magick convert assets/favicon-32x32.png assets/favicon-16x16.png assets/favicon.ico
```

If you want, upload your original PNG and I will generate proper PNG/ICO files and update the links.