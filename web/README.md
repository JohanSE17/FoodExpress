# Convertir PWA a un Proyecto de iOS con Capacitor

Estas instrucciones le guiarán a través de la conversión de su Aplicación Web Progresiva (PWA) existente en un proyecto de iOS que puede ejecutarse en Xcode.

## Prerrequisitos

*   Node.js e npm instalados
*   Xcode instalado

## Pasos

1.  **Instalar Capacitor:**

    ```bash
    npm install -g @capacitor/cli @capacitor/core
    ```

2.  **Crear un Proyecto de Capacitor:**

    ```bash
    mkdir ios-app
    cd ios-app
    npm init -y
    npm install @capacitor/ios @capacitor/cli @capacitor/core
    npx cap init --web-dir ../public --app-name "NombreDeTuApp" --appId "com.example.tuapp"
    ```

    Reemplace `"NombreDeTuApp"` con el nombre deseado para su aplicación de iOS.
    Reemplace `"com.example.tuapp"` con un identificador de paquete único para su aplicación.

3.  **Copiar los Activos (Assets) de la Aplicación Web:**

    Copie el contenido del directorio `public` de su PWA (o cualquier directorio que contenga los activos de su aplicación web) al directorio `ios-app/www`.

4.  **Agregar la Plataforma iOS:**

    ```bash
    cd ios-app
    npx cap add ios
    ```

5.  **Construir el Proyecto de iOS:**

    ```bash
    npx cap sync ios
    npx cap open ios
    ```

    Esto abrirá el proyecto en Xcode.

6.  **Ejecutar en Xcode:**

    En Xcode, seleccione su dispositivo de destino (simulador o dispositivo físico) y ejecute el proyecto.

## Notas

*   Es posible que deba configurar certificados de firma y perfiles de aprovisionamiento en Xcode para ejecutar la aplicación en un dispositivo físico.
*   Este proceso crea un contenedor básico de iOS alrededor de su PWA. Es posible que deba agregar funcionalidad nativa adicional utilizando complementos (plugins) de Capacitor.
