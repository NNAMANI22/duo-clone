import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-h2 text-center text-primary">LinGua</Text>
      <Link href="/onboarding" className="text-body-md text-primary">
        Open onboarding
      </Link>
    </View>
  );
}
