'use client';

// Núcleo (Core)
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RestaurantPage() {
  // Ganchos (Hooks)
  const router = useRouter();

  // Effects
  useEffect(() => {
    router.push('/admin/vendor/dashboard'); // vendor or restaurant based on user type
  }, []);

  return <></>;
}
