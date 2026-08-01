import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

import { colors, fontFamily, typography } from "@/theme";

type Provider = "google" | "facebook" | "apple";

const providers: Record<Provider, { label: string; icon: keyof typeof Ionicons.glyphMap; color: string }> = {
  google: { label: "Continue with Google", icon: "logo-google", color: "#EA4335" },
  facebook: { label: "Continue with Facebook", icon: "logo-facebook", color: "#1877F2" },
  apple: { label: "Continue with Apple", icon: "logo-apple", color: colors.foreground },
};

type SocialButtonProps = {
  provider: Provider;
  onPress: () => void;
};

export function SocialButton({ provider, onPress }: SocialButtonProps) {
  const { label, icon, color } = providers[provider];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 16,
        paddingVertical: 14,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Ionicons name={icon} size={20} color={color} />
      <Text style={[typography.bodyLarge, { fontFamily: fontFamily.medium, color: colors.foreground, marginLeft: 12 }]}>
        {label}
      </Text>
    </Pressable>
  );
}
