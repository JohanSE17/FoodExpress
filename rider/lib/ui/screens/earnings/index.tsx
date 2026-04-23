// Ganchos (Hooks)
import { useApptheme } from "@/lib/context/global/theme.context";

// Núcleo (Core)
import { SafeAreaView } from "react-native";

// Componentes
import EarningsMain from "../../screen-components/earnings/view/main";

export default function EarningsScreen() {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();
  return (
    <SafeAreaView style={{ backgroundColor: appTheme.screenBackground }}>
      <EarningsMain />
    </SafeAreaView>
  );
}
