// Componentes
import SuccessModal from "../success-modal";

// Núcleo (Core)
import { View } from "react-native";

// Ganchos (Hooks)
import { useApptheme } from "@/lib/context/global/theme.context";
import { useTranslation } from "react-i18next";

export default function WithdrawRquestSuccessMain() {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();
  const { t } = useTranslation();
  return (
    <View
      className="items-center justify-center h-full"
      style={{ backgroundColor: appTheme.screenBackground }}
    >
      <SuccessModal
        message={t("Your request for withdrawal has been submitted")}
      />
    </View>
  );
}
