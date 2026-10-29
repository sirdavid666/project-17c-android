# BioNexa — Biomedical Engineering Companion

BioNexa is an offline-first Android study companion built with Vite and Capacitor.

The Android app name is BioNexa and its scientific launcher icon is stored in assets/.

## Included features

- Searchable starter reference library for physics, chemistry, mathematics,
  engineering and biomedical engineering
- Ohm's law calculator
- Electrical power calculator
- Pressure conversion calculator
- On-device notes and study planner
- Basic quiz
- Limited offline explanation helper
- Gemini AI tutor requiring internet access and a valid API key
- Welcome Boss spoken greeting where supported
- Custom BioNexa launcher icon

The reference library is a starter collection, not every scientific law.
Verify equations, assumptions and units against course materials.

## Build the Android APK using GitHub Actions

1. Upload all project files and folders to the root of your GitHub repository.
2. Preserve the folder structure exactly as shown.
3. Commit the files to the main branch.
4. Open the Actions tab.
5. Select Build BioNexa Android APK.
6. Wait for the workflow to complete successfully.
7. Download the BioNexa-Android-APK artifact.
8. Extract that artifact ZIP and install app-debug.apk on your Android phone.

## Build workflow

The workflow installs Node.js and Java, builds the web app, creates the
Android project, applies the BioNexa branding, compiles a debug APK and
uploads the APK as an artifact.

A successful APK build is not guaranteed until GitHub Actions finishes.
