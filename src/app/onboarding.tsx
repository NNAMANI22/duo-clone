import { Stack } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors, typography } from "@/theme";

// Everything below is styled with `style` + theme tokens instead of NativeWind
// classNames. On-device testing (Android) showed this NativeWind preview build
// fails to render text sized via custom typography utilities, and `flex: 1`
// expansion inside this screen's column wasn't reliably filling the remaining
// screen height either. `style` + explicit/absolute positioning sidesteps both
// issues and is confirmed to render identically on web.

const speechBubbles = [
  { text: "Hello!", top: 0, left: 8, bg: `${colors.blue}1A`, color: colors.foreground },
  { text: "¡Hola!", top: 40, right: 0, bg: `${colors.primary}1A`, color: colors.primary },
  { text: "你好!", top: 112, right: 8, bg: `${colors.error}1A`, color: colors.error },
];

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Image
            source={images.mascotLogo}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <Text style={[typography.h1, { color: colors.foreground, marginLeft: 8 }]}>LinGua</Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={[typography.h1, { color: colors.foreground, marginBottom: 4 }]}>
            Your AI language
          </Text>
          <Text style={[typography.h1, { color: colors.primary }]}>teacher.</Text>
        </View>

        <Text style={[typography.bodyMedium, { color: colors.muted, marginTop: 12 }]}>
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        {/* Pinned to the center of the remaining space via absolute
            positioning rather than flex:1, which wasn't expanding reliably. */}
        <View
          style={{
            position: "absolute",
            top: 220,
            bottom: 110,
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: 288, height: 288 }}>
            <Image
              source={images.mascotWelcome}
              style={{ width: 288, height: 288 }}
              resizeMode="contain"
            />
            {speechBubbles.map((bubble) => (
              <View
                key={bubble.text}
                style={{
                  position: "absolute",
                  top: bubble.top,
                  left: bubble.left,
                  right: bubble.right,
                  backgroundColor: bubble.bg,
                  borderRadius: 16,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}
              >
                <Text style={[typography.bodySmall, { color: bubble.color }]}>{bubble.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <Pressable
          style={({ pressed }) => ({
            position: "absolute",
            left: 24,
            right: 24,
            bottom: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 999,
            backgroundColor: colors.primary,
            paddingHorizontal: 24,
            paddingVertical: 16,
            opacity: pressed ? 0.85 : 1,
          })}
        >
          <View style={{ width: 24 }} />
          <Text
            style={[
              typography.bodyLarge,
              {
                flex: 1,
                textAlign: "center",
                fontFamily: "Poppins_600SemiBold",
                color: colors.background,
              },
            ]}
          >
            Get Started
          </Text>
          <Text style={[typography.h3, { width: 24, textAlign: "right", color: colors.background }]}>
            ›
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
