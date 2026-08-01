import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthTextInput } from "@/components/auth/AuthTextInput";
import { PrimaryButton } from "@/components/auth/PrimaryButton";
import { SocialButton } from "@/components/auth/SocialButton";
import { VerificationModal } from "@/components/auth/VerificationModal";
import { images } from "@/constants/images";
import { colors, typography } from "@/theme";

// Everything below is styled with `style` + theme tokens instead of NativeWind
// classNames, mirroring the workaround in `onboarding.tsx` — see the Known
// Issue note in AGENTS.md. `SafeAreaView` classNames are silently no-ops, and
// the custom typography utility classes were confirmed to render invisible on
// Android under this NativeWind preview build.

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          <Pressable
            onPress={() => router.back()}
            hitSlop={8}
            style={{ marginTop: 8, height: 40, width: 40, alignItems: "center", justifyContent: "center" }}
          >
            <Ionicons name="chevron-back" size={24} color={colors.foreground} />
          </Pressable>

          <Text style={[typography.h1, { marginTop: 8, color: colors.foreground }]}>Create your account</Text>
          <Text style={[typography.bodyMedium, { marginTop: 4, color: colors.muted }]}>
            Start your language journey today ✨
          </Text>

          <View style={{ marginVertical: 32, height: 208, alignItems: "center", justifyContent: "center" }}>
            <View style={{ height: 208, width: 208 }}>
              <Image source={images.mascotAuth} style={{ height: 208, width: 208 }} resizeMode="contain" />
              <View style={{ position: "absolute", left: -8, top: 8 }}>
                <Ionicons name="sparkles" size={18} color={colors.streak} />
              </View>
              <View style={{ position: "absolute", right: 16, top: 64 }}>
                <Ionicons name="sparkles" size={16} color={colors.blue} />
              </View>
              <View style={{ position: "absolute", right: 40, top: 144 }}>
                <Ionicons name="sparkles" size={14} color={colors.primary} />
              </View>
            </View>
          </View>

          <View style={{ gap: 16 }}>
            <AuthTextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              keyboardType="email-address"
            />
            <AuthTextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter a password"
              secureTextEntry
            />
          </View>

          <View style={{ marginTop: 24 }}>
            <PrimaryButton label="Sign Up" onPress={() => setShowVerification(true)} />
          </View>

          <View style={{ marginVertical: 24, flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View style={{ height: 1, flex: 1, backgroundColor: colors.border }} />
            <Text style={[typography.bodySmall, { color: colors.muted }]}>or continue with</Text>
            <View style={{ height: 1, flex: 1, backgroundColor: colors.border }} />
          </View>

          <View style={{ gap: 12 }}>
            <SocialButton provider="google" onPress={() => {}} />
            <SocialButton provider="facebook" onPress={() => {}} />
            <SocialButton provider="apple" onPress={() => {}} />
          </View>

          <View style={{ marginTop: 32, flexDirection: "row", justifyContent: "center" }}>
            <Text style={[typography.bodyMedium, { color: colors.muted }]}>Already have an account? </Text>
            <Link href="/sign-in" replace style={[typography.bodyMedium, { color: colors.primary }]}>
              Log in
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal visible={showVerification} email={email} onClose={() => setShowVerification(false)} />
    </SafeAreaView>
  );
}
