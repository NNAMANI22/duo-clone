import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardTypeOptions, Pressable, Text, TextInput, View } from "react-native";

import { colors, fontFamily, typography } from "@/theme";

type AuthTextInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export function AuthTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
}: AuthTextInputProps) {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View
      style={{
        width: "100%",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <Text style={[typography.bodySmall, { color: colors.muted }]}>{label}</Text>
      <View style={{ marginTop: 4, flexDirection: "row", alignItems: "center" }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.muted}
          secureTextEntry={hidden}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
          style={[typography.bodyLarge, { flex: 1, fontFamily: fontFamily.regular, color: colors.foreground, padding: 0 }]}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setHidden((h) => !h)} hitSlop={8}>
            <Ionicons name={hidden ? "eye-outline" : "eye-off-outline"} size={20} color={colors.muted} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
