# Smart Home Mobile

React and TypeScript starter for the Smart Home iPhone and Android apps. Vite builds the shared UI and Capacitor packages it in the native projects under `ios/` and `android/`. The starter screen shows the platform reported by the Capacitor bridge.

## Run locally

Use Node 22.22.2+ on the 22.x line, or Node 24.15 or newer. For iOS, use Xcode 26 or newer. For Android, install Android Studio and the Android 36 SDK, and select JDK 21 as the Gradle JDK.

```sh
npm ci
npm run dev
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

Re-run `npm run sync` after changing the web UI or adding a Capacitor plugin. The starter bundle ID is `com.chmurawedy.smarthome`.

The native templates start at iOS 15 and Android API 24. The web build targets iOS 15 and Chromium 111. Use an up-to-date Android System WebView when testing older Android devices.
