// Componentes
import CustomScreenHeader from "@/lib/ui/useable-components/custom-screen-header";

// Ganchos (Hooks)
import { useTranslation } from "react-i18next";

export default function WalletScreenHeader() {
  // Ganchos (Hooks)
  const { t } = useTranslation();
  return <CustomScreenHeader title={t("Earnings")} />;
}
