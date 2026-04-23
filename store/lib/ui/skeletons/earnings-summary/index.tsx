// Moti
import { MotiScrollView, MotiView } from "moti";

// Componentes
import EarningStackSkeleton from "../earnings/earning-stack";
import EarningSummaryHeader from "./earnings-summary-header";

// Ganchos (Hooks)
import { useApptheme } from "@/lib/context/theme.context";

export default function EarningsSummaryMainLoading() {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();
  return (
    <MotiView style={{ backgroundColor: appTheme.screenBackground }}>
      <EarningSummaryHeader />
      <MotiScrollView>
        {[...Array(10)].map((_, index) => {
          return <EarningStackSkeleton key={index} />;
        })}
      </MotiScrollView>
    </MotiView>
  );
}
