// Núcleo (Core)
import { SafeAreaView } from "react-native-safe-area-context";

// Componentes
import ChatHeader from "@/lib/ui/screen-components/chat/header";
import ChatMain from "@/lib/ui/screen-components/chat/main";

// Ganchos (Hooks)
import { useApptheme } from "@/lib/context/global/theme.context";

export default function Chat() {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();
  return (
    <SafeAreaView
      className="flex-1  gap-y-3"
      style={{ backgroundColor: appTheme.themeBackground }}
    >
      <ChatHeader />
      <ChatMain />
    </SafeAreaView>
  );
}
