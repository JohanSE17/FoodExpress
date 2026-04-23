// Componentes
import { useApptheme } from "@/lib/context/theme.context";
import SuccessModal from "../success-modal";

// Núcleo (Core)
import { View } from "react-native";

export default function WithdrawRquestSuccessMain() {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();

  return (
    <View
      className="items-center justify-center h-full"
      style={{ backgroundColor: appTheme.themeBackground }}
    >
      <SuccessModal message="Your request for withdrawal has been submitted" />
    </View>
  );
}
