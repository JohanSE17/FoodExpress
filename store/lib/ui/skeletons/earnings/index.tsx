// Moti
import { MotiView } from "moti";

// Componentes
import EarningHeadingSkeleton from "./earning-heading";
import EarningStackSkeleton from "./earning-stack";
import EarningTopChartSkeleton from "./earning-top-chart";

// Ganchos (Hooks)
import { useApptheme } from "@/lib/context/theme.context";

export default function EarningScreenMainLoading() {
  // Ganchos (Hooks)
  const { appTheme } = useApptheme();
  return (
    <MotiView
      className="flex flex-col justify-between items-center"
      style={{ backgroundColor: appTheme.screenBackground }}
    >
      <EarningTopChartSkeleton />
      <EarningHeadingSkeleton />
      <MotiView>
        {[...Array(5)].map((_, index) => (
          <EarningStackSkeleton key={index} />
        ))}
      </MotiView>
    </MotiView>
  );
}
