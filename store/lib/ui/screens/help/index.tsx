// Núcleo (Core)
import { SafeAreaView } from "react-native-safe-area-context";

// Componentes
import { useApptheme } from "@/lib/context/theme.context";
import HelpMain from "../../screen-components/home/help/view/main";

const HelpScreen = () => {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();
  return (
    <SafeAreaView
      edges={["bottom", "right", "left"]}
      className="w-full h-full"
      style={{ backgroundColor: appTheme.themeBackground }}
    >
      <HelpMain />
    </SafeAreaView>
  );
};

export default HelpScreen;
