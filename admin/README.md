# Sistema de Gestión de Domicilios para Restaurantes

Este proyecto es un Sistema de Gestión de Domicilios para Restaurantes construido con tecnologías web modernas.

## Tecnologías Utilizadas

- **Next.js 14**
- **TypeScript**
- **Librerías de UI**: Next UI, Chakra UI, o Prime React
- **React Icons** (si se requieren)
- **Tailwind CSS**
- **Cypress** para:
  - Pruebas de Componentes
  - Pruebas de Integración
  - Pruebas E2E (Extremo a Extremo)

## Tamaño de Construcción y Rendimiento

- **Tamaño de Página**: Debe estar alrededor de los 150KB.
- **JS y CSS Críticos**: Deben ser inferiores a 100KB.
- **Análisis de Bundle**: Usar `webpack-bundle-analyzer` como dependencia de desarrollo para analizar el paquete.
- **Importaciones Dinámicas**: Usar importaciones dinámicas de Next.js.
- **Optimización de Imágenes**: Usar la etiqueta `<Image/>` de Next.js.

### Métricas de Rendimiento

La aplicación debe seguir los tiempos de renderizado estándar de la siguiente manera:

- **First Contentful Paint (FCP)**: Menos de 1.8 segundos
- **Largest Contentful Paint (LCP)**: Menos de 2.5 segundos
- **First Input Delay (FID)**: Menos de 100 milisegundos
- **Time to Interactive (TTI)**: Menos de 5 segundos
- **Total Blocking Time (TBT)**: Menos de 300 milisegundos
- **Cumulative Layout Shift (CLS)**: Menos de 0.1
- **Speed Index (SI)**: Menos de 4.3 segundos
- **Time to First Byte (TTFB)**: Menos de 600 milisegundos
- **First Meaningful Paint (FMP)**: Menos de 2.5 segundos

Utilice la herramienta Lighthouse del navegador para los informes de rendimiento.

## Estructura de Carpetas

### Carpeta `app`

- Contiene únicamente rutas y layouts (diseños).

### Carpeta `cypress`

- Contiene únicamente casos de prueba.

### Carpeta `lib`

- **Carpeta hooks**: Hooks personalizados (ej. `useAuth`, `useConfiguration`).
- **Carpeta hoc**: Componentes de orden superior (ej. `HOC de Protección de Rutas`, `HOC de Refresco de Datos`).
- **Carpeta services**: Servicios para diferentes flujos, llamadas a APIs de terceros (ej. `Apollo`, `Geolocation API`).
  - Crear subcarpetas separadas.
- **Carpeta ui**: Componentes reutilizables, diseños y pantallas.
- **Carpeta utils**:
  - **Carpeta methods**: Métodos de utilidad (ej. manipulación de cadenas).
  - **Carpeta interfaces**: Interfaces de TypeScript (prefijadas con "I").
  - **Carpeta constants**: Constantes comunes (cadenas, encabezados).
  - **Carpeta types**: Tipos personalizados de TypeScript, si es necesario.

## Lineamientos para Componentes

- Dividir los componentes complejos en subcomponentes (ej. encabezado, cuerpo, pie de página).
- Líneas de código recomendadas por componente: `100-200 líneas`.

## Registro de Cambios (Changelog)

- Registrar los cambios de código en el archivo `CHANGELOG.md`.
- Solo registrar integraciones (merges) o envíos (pushes) a las ramas develop/staging/production.

---

```plaintext

├── .husky
│   └── ganchos de git
├── .vscode
│   └── configuración de IDE
├── dist
│   └── aplicación construida y minificada.
├── .npmrc
│   └── configuración de npm
├── .nvmrc
│   └── configuración de nvm
├── cypress.config.ts
│   └── configuración de cypress
├── app
│   └── rutas
│   └── diseños (layouts)
├── lib
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useConfiguration.ts
│   │   └── index.ts
│   ├── hoc
│   │   ├── withRouteProtection.ts
│   │   └── withDataRefresh.ts
│   │
│   ├── services
│   │   ├── support
│   │   │   ├── support.service.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── ui
│   │   ├── components
│   │   ├── layouts
│   │   └── screens
│   ├── utils
│   │   ├── methods
│   │   │   |   ├── string
│   │   │   |   |   ├── sort.ts
│   │   │   |   |   ├── toSentenceCase.ts
│   │   │   |   |   ├── index.ts
│   │   │   |   ├── regex
│   │   │   |   |   ├── email.ts
│   │   │   |   |   ├── password.ts
│   │   │   |   |   ├── url.ts
│   │   │   |   |   ├── index.ts
│   │   │   |   └── index. ts
│   │   ├── interfaces
│   │   │   ├── common
│   │   │   │   ├── IParent.ts
│   │   │   │   └── index.ts
│   │   │   ├── support.interface (subcarpetas si es necesario e index.ts para cada una)
│   │   │   └── index.ts
│   │   ├── constants
│   │   │   ├── strings
│   │   │   │   ├── global.strings.ts
│   │   │   │   └── support.strings (subcarpetas si es necesario e index.ts para cada una)
│   │   │   │   └── index.ts (exporta todo lo anterior)
│   │   │   ├── headers
│   │   │   │   ├── global.headers.ts
│   │   │   │   └── support.headers (subcarpetas si es necesario e index.ts para cada una)
│   │   │   │   └──  index.ts (exporta todo lo anterior)
│   │   │   └── index.ts
│   │   ├── types (igual que interfaces)
│   │   │   └── index.ts
├── CHANGELOG.md
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

### Git

- **Tipos de Commit Predefinidos**:
  - build (construcción)
  - fix (corrección)
  - refactor (refactorización)
  - revert (reversión)
  - style (estilo)
  - test (pruebas)
  - translation (traducción)
  - security (seguridad)
  - changeset (conjunto de cambios)
  - config (configuración)

### Nota

- Bajo constantes modificaciones.
