import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Unsplash image used in place of the original mascot illustration.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80";

export default function SplashScreen() {
  useEffect(() => {
    navigateToWelcomeScreen()
  }, []);

  const navigateToWelcomeScreen = () => {
    setTimeout(() => {
      router.replace("/welcome");
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.card}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <Image
          source={{ uri: HERO_IMAGE }}
          style={styles.hero}
          resizeMode="cover"
        />

        <Text style={styles.title}>FuFu Fitness App</Text>
        <Text style={styles.subtitle}>
          A Kawaii fitness app, designed{"\n"}by Salman Khan
        </Text>
      </View>

      <Text style={styles.brand}>SALMANWAP</Text>
    </SafeAreaView>
  );
}

const CREAM = "#FBF6E9";
const SAND = "#EFE3C2";
const DARK = "#4A3F2A";
const MUTED = "#6B5E45";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    backgroundColor: CREAM,
    borderRadius: 36,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 32,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 40,
    backgroundColor: SAND,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: DARK,
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: MUTED,
    textAlign: "center",
    lineHeight: 22,
  },
  brand: {
    textAlign: "center",
    color: MUTED,
    letterSpacing: 6,
    fontSize: 14,
    fontWeight: "600",
  },
});
