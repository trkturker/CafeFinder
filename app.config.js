import 'dotenv/config'; 

export default {
  expo: {
    name: "CafeFinder",
    slug: "cafe-finder",
    version: "1.0.0",
    scheme: "CafeFinder",
    platforms: [
      "ios",
      "android"
    ],
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-maps",
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ],
      "expo-font"
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true
    },
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#ea4335"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.zaferayan.CafeFinder"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ea4335"
      },
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY 
        }
      },
      package: "com.zaferayan.x1812maps"
    }
  }
};