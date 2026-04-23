// Componentes
import HomeProcessingOrdersMain from '@/lib/ui/screen-components/home/orders/main/processing-orders'

// Ganchos (Hooks)
import { useTranslation } from 'react-i18next'

export default function HomeScreen() {
  // Ganchos (Hooks)
  const { t } = useTranslation()
  return (
    <HomeProcessingOrdersMain
      route={{ key: 'processing', title: t('Processing Orders') }}
    />
  )
}
