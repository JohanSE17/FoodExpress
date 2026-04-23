// Moti
import { MotiView } from "moti";

// Componentes
import WalletHeadingSkeleton from "./wallet-heading";
import WalletRecentTransactionSkeleton from "./wallet-recent-transactions";
import WalletTopInfoSkeleton from "./wallet-top-info";

// Ganchos (Hooks)
import { useApptheme } from "@/lib/context/theme.context";

export default function WalletScreenMainLoading() {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();
  return (
    <MotiView
      className="flex flex-co justify-evenly h-full w-full"
      style={{ backgroundColor: appTheme.themeBackground }}
    >
      <WalletTopInfoSkeleton />
      <WalletHeadingSkeleton />
      <WalletRecentTransactionSkeleton />
    </MotiView>
  );
}
