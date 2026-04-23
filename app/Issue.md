# Problema de Idioma RTL/LTR resuelto

## Cambios Clave Implementados

1. **Eliminación de Escucha Innecesaria:**
   - Se ha eliminado el escucha (listener) `i18next.on('languageChanged')` que anteriormente manejaba los cambios de idioma y forzaba la dirección RTL/LTR.

2. **Uso de `i18n.dir()` para el Manejo de la Dirección:**
   - En lugar de gestionar la dirección RTL/LTR manualmente, ahora utilizamos la función `i18n.dir()`. Este método determina automáticamente si la aplicación debe usar un diseño de derecha a izquierda (RTL) o de izquierda a derecha (LTR) basado en el idioma seleccionado.

3. **Actualización de la Configuración de la Aplicación (`app.json`):**
   - Para soportar el idioma a nivel de aplicación y asegurar que la dirección del idioma se maneje correctamente, las banderas `supportsRTL` y `forcesRTL` en `app.json` se han establecido en `false`.

### Ejemplo de Configuración en `app.json`:

```json
{
  "expo": {
    "extra": {
      "eas": {
        "projectId": "id-del-proyecto"
      },
      "supportsRTL": false,
      "forcesRTL": false
    },
    "plugins": [
      ["expo-localization"]
    ]
  }
}
```
