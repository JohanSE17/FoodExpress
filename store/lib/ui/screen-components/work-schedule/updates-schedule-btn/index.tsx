// Núcleo (Core)
import { CustomContinueButton } from "@/lib/ui/useable-components";

// Ganchos (Hooks)
import { useTranslation } from "react-i18next";

export default function UpdateScheduleBtn({
  onHandlerSubmit,
  isUpatingSchedule,
}: {
  onHandlerSubmit: () => Promise<void>;
  isUpatingSchedule: boolean;
  width: number;
}) {
  // Ganchos (Hooks)
  const { t } = useTranslation();

  return (
    <CustomContinueButton
      title={t("Update Schedule")}
      onPress={onHandlerSubmit}
      isLoading={isUpatingSchedule}
    />
  );
}
