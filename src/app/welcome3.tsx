import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type FeatureProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <View style={styles.feature}>
    <View style={styles.iconBox}>
      <Ionicons name={icon} size={22} color="#3d2f24" />
    </View>
    <View style={styles.featureText}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{description}</Text>
    </View>
  </View>
);

export default function WelcomeScreen3() {

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageWrap}>
          <Image
            source={require("@/assets/images/mouse1.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.heading}>Get Your Body Shaped Up With Us</Text>

        <View style={styles.features}>
          <Feature
            icon="fitness"
            title="Activity"
            description="Track your daily steps, workouts, and progress."
          />
          <Feature
            icon="book"
            title="Learn About Youthx+"
            description="Discover tips and guides to keep FuFu healthy."
          />
          <Feature
            icon="people"
            title="Share With Others"
            description="Connect with the community and share milestones."
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Finish •</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f7efe0" },
  container: { padding: 24, paddingBottom: 40 },
  time: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3d2f24",
    alignSelf: "center",
    marginBottom: 16,
  },
  imageWrap: {
    borderRadius: 24,
    overflow: "hidden",
  },
  image: { width: "100%", height: 260 },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    color: "#3d2f24",
    textAlign: "center",
    marginVertical: 28,
  },
  features: { gap: 18, marginBottom: 32 },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#faebd0",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#ecdcc1",
    alignItems: "center",
    justifyContent: "center",
  },
  featureText: { flex: 1 },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3d2f24",
    marginBottom: 2,
  },
  featureDesc: { fontSize: 13, color: "#6b5b4a", lineHeight: 18 },
  button: {
    backgroundColor: "#3d2f24",
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#f7efe0", fontSize: 16, fontWeight: "600" },
});
