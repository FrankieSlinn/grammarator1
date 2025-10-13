export default {
  "expo": {
    "name": "grammarator1",
    "slug": "grammarator1",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "grammarator1",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
       "runtimeVersion": "fingerprint",
    "extra": {
  openaiApiKey: process.env.OPENAI_API_KEY,
      "eas": {
      "projectId": "c2c87c36-baf3-4d92-a9d4-dbbe984c5a64"
      },
      "router": {}

  
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.frankieslinn.grammarator1"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.frankieslinn.grammarator1",
      "versionCode": 1
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      "expo-web-browser"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "owner": "frankieslinn",
    "updates": {
      "url": "https://u.expo.dev/c2c87c36-baf3-4d92-a9d4-dbbe984c5a64"
    }
  }
}
