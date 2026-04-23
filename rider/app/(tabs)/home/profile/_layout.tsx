// Expo
import { Stack } from "expo-router";

// Ganchos (Hooks)
import { useTranslation } from "react-i18next";

export default function ProfileLayout() {
  // Ganchos (Hooks)
  const { t } = useTranslation();
  return (
    <Stack
      screenOptions={{ headerTitle: "", headerBackButtonMenuEnabled: true }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: t("Profile"),
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack>
  );
}
