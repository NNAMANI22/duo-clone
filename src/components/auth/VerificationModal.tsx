import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Modal, Platform, Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, fontFamily, typography } from "@/theme";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
};

export function VerificationModal({ visible, email, onClose }: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    if (visible) {
      setCode("");
      const timeout = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  const handleChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digits);
    if (digits.length === CODE_LENGTH) {
      router.replace("/");
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose} statusBarTranslucent>
      <View style={{ flex: 1 }}>
        <Pressable
          onPress={onClose}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: `${colors.foreground}66` }}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, justifyContent: "flex-end" }}
          pointerEvents="box-none"
        >
          <View
            style={{
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              backgroundColor: colors.background,
              paddingHorizontal: 24,
              paddingTop: 24,
              paddingBottom: insets.bottom + 24,
            }}
          >
            <View
              style={{
                marginBottom: 24,
                height: 4,
                width: 40,
                alignSelf: "center",
                borderRadius: 999,
                backgroundColor: colors.border,
              }}
            />

            <Text style={[typography.h3, { fontFamily: fontFamily.semiBold, color: colors.foreground }]}>
              Verify your email
            </Text>
            <Text style={[typography.bodyMedium, { marginTop: 8, color: colors.muted }]}>
              We sent a {CODE_LENGTH}-digit code to {email || "your email"}. Enter it below to continue.
            </Text>

            <Pressable
              onPress={() => inputRef.current?.focus()}
              style={{ marginTop: 24, flexDirection: "row", justifyContent: "center", gap: 8 }}
            >
              {Array.from({ length: CODE_LENGTH }).map((_, index) => {
                const digit = code[index];
                const isActive = index === code.length;
                return (
                  <View
                    key={index}
                    style={{
                      height: 56,
                      width: 44,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: isActive ? colors.primary : colors.border,
                    }}
                  >
                    <Text style={[typography.h3, { fontFamily: fontFamily.semiBold, color: colors.foreground }]}>
                      {digit ?? ""}
                    </Text>
                  </View>
                );
              })}
            </Pressable>

            <TextInput
              ref={inputRef}
              value={code}
              onChangeText={handleChange}
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              style={{ position: "absolute", opacity: 0, height: 1, width: 1 }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
