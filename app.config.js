import 'dotenv/config';

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file.'
  );
}

export default {
  expo: {
    name: "Lost and Found",
    slug: "Lost-and-Found",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.akshayDevadiga.lostandfound",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      favicon: "./assets/images/favicon.png"
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true
    },
    extra: {
      supabaseUrl: SUPABASE_URL,
      supabaseAnonKey: SUPABASE_ANON_KEY,
      eas: {
        projectId: "bdf2902b-6696-4ba3-bb0f-061c5b9daed3"  // 🔥 Add this line
      }
    }
  }
};