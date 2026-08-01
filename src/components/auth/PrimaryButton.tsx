import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text } from "react-native";

import { colors, fontFamily, typography } from "@/theme";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function PrimaryButton({ label, onPress, disabled }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => ({ opacity: pressed || disabled ? 0.75 : 1 })}
    >
      <LinearGradient
        colors={[colors.primary, colors.primaryDeep]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ borderRadius: 999, paddingVertical: 16, alignItems: "center" }}
      >
        <Text style={[typography.bodyLarge, { fontFamily: fontFamily.semiBold, color: colors.background }]}>
          {label}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
