# Smart Home Mobile

The iPhone and Android apps ship a local build of the Smart Home React dashboard. The `dashboard` submodule pins the Smart Home Service revision used by the Dell frontend. The app uses the dashboard’s existing API client with `http://homeassistant.dom:8080` as its default server.

Connect to your home Wi-Fi and enter your existing Smart Home service access key in the dashboard’s connection screen. On iPhone, allow local network access when prompted.

## Run locally

Use Node 22.22.2+ on the 22.x line, or Node 24.15 or newer, and pnpm 11. For iOS, use Xcode 26 or newer. For Android, install Android Studio and the Android 36 SDK, and select JDK 21 as the Gradle JDK.

```sh
npm ci
npm run setup:dashboard
```

Build and copy the web bundle into both native projects.

```sh
npm run sync
```

Open the native project in its IDE, then select a simulator, emulator, or device and run the app.

```sh
npm run ios
npm run android
```

Re-run `npm run sync` after updating the dashboard revision or adding a Capacitor plugin. Use `npm run dev` to preview the dashboard in a desktop browser. Its browser requests use Dell’s CORS settings. The app bundle ID is `com.chmurawedy.smarthome`.

Use iOS 16.4 or newer and an Android System WebView based on Chromium 111 or newer for the dashboard.
