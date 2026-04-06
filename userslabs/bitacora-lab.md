# Bitácora de Degradación - Laboratorio FoodExpress

Este documento resume los cambios realizados en el repositorio FoodExpress para crear el entorno del laboratorio de mantenimiento Scrumban. Cada rama representa un tipo específico de deuda técnica introducida intencionalmente.

## Resumen de Ramas y Problemas

| Rama | Descripción del Problema | Archivos Principales Afectados |
| :--- | :--- | :--- |
| **refactor/modular-estructura-base** | Desmantelamiento de la estructura `app/` centralizada. Se movió el código a `old-monolith/` para forzar una reorganización. | `admin/app/`, `web/app/` |
| **refactor/modular-componentes-dashboard** | Dashboard de administración convertido en un componente monolítico masivo. | `admin/app/old-monolith/.../dashboard/page.tsx` |
| **refactor/modular-rutas-navegacion** | Eliminación de configuración central de rutas. Navegación hardcoded en toda la UI. | `admin/lib/utils/constants/routes.ts` (Eliminado) |
| **refactor/modular-utils-duplicados** | Introducción de lógica redundante en utilidades de formato de números y fechas. | `admin/lib/utils/methods/format-utils-1.ts`, `format-utils-2.ts` |
| **refactor/modular-estilos-pedidos** | Inlining de estilos CSS en componentes de Tablas y pedidos, rompiendo la modularidad visual. | `web/lib/ui/useable-components/table/index.tsx` |
| **refactor/modular-hooks** | Inlining de lógica de hooks de usuario y datos directamente dentro de las páginas. | `admin/lib/hooks/useUser.tsx` (Inlined) |
| **refactor/modular-rutas-restaurantes** | Componentes de restaurantes con lógica mezclada y tipos `any` en parámetros y props. | `web/app/old-monolith/.../restaurant/[slug]/[id]/page.tsx` |
| **refactor/modular-services-graphql** | Eliminación de servicios GraphQL. Queries y mutaciones inyectadas directo en la UI. | `admin/lib/api/graphql/` (Servicios eliminados) |
| **refactor/modular-checkout-logica** | Pantalla de checkout web convertida en un solo archivo gigante con 1700+ líneas. | `web/lib/ui/screens/protected/order/checkout/index.tsx` |
| **refactor/modular-constants** | Eliminación de archivos globales de constantes. Hardcoding masivo de strings y keys. | `admin/lib/utils/constants/global.ts` (Eliminado) |
| **refactor/modular-layouts** | Descomposición del Root Layout. Proveedores (ThemeProvider, Intl) replicados en cada página. | `admin/app/layout.tsx`, `web/app/layout.tsx` |
| **refactor/modular-types** | Remoción de interfaces centralizadas y reemplazo por el tipo `any` en todo el repositorio. | `admin/lib/utils/interfaces/` (Eliminado) |

## Objetivos del Laboratorio
1. **Refactorización**: Centralizar constantes, rutas e interfaces eliminadas.
2. **Modularización**: Extraer componentes de los archivos monolíticos (Dashboard y Checkout).
3. **Tipado**: Restaurar la seguridad de tipos reemplazando `any` por interfaces adecuadas.
4. **Simplificación**: Consolidar utilidades y hooks redundantes.
