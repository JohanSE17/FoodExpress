// Componentes
import HomeNewOrdersMain from "@/lib/ui/screen-components/home/orders/main/new-orders";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
    // Ganchos (Hooks)
    const {t} = useTranslation();
  return (
    <HomeNewOrdersMain route={{ key: "new_orders", title: t("New Orders") }} />
  );
}
