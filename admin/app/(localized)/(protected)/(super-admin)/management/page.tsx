'use client';

// Núcleo (Core)
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// Screen

export default function GeneralPage() {
  // Ganchos (Hooks)
  const router = useRouter();

  // Effects
  useEffect(() => {
    router.push('/management/configurations');
  }, []);

  return <></>;
}
