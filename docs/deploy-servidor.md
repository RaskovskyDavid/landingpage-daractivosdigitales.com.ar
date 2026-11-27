# Guía de Despliegue Continuo e Infraestructura (Firebase Hosting + GitHub Actions)

Este documento detalla la arquitectura de integración y despliegue continuo (CI/CD) de **DAR Activos Digitales**, la configuración de credenciales seguras mediante cuentas de servicio de Google Cloud y el procedimiento de contingencia (Plan B) para runners self-hosted en servidor local.

---

## 1. Arquitectura de Despliegue Principal (GitHub Actions)

El sitio utiliza **GitHub Actions** con runners estándar de GitHub (`ubuntu-latest`) bajo una configuración dinámica desacoplada:

```yaml
runs-on: ${{ fromJSON(vars.RUNNER || '"ubuntu-latest"') }}
```

Esto permite ejecutar el flujo de CI/CD de forma gratuita y aislada mientras el repositorio sea público, y alternar a runners dedicados si fuera necesario simplemente configurando la variable de repositorio `RUNNER` en GitHub, sin alterar una sola línea de código.

### Flujo de Trabajo
- **Pull Requests hacia `master`/`main`**: Ejecuta `npm ci`, compila con Astro y Pagefind (`npm run build`), y crea un canal de vista previa temporal en Firebase Hosting comentando automáticamente la URL en el PR para validación visual.
- **Push hacia `master`/`main`**: Ejecuta el pipeline y despliega directamente al canal de producción (`channelId: live`) en `daractivosdigitales.web.app` y dominios personalizados.

---

## 2. Configuración de Credenciales (Cuenta de Servicio)

El despliegue utiliza autenticación oficial recomendada por Google mediante una **Service Account**, evitando el método obsoleto de tokens manuales (`firebase login:ci`).

### Paso a paso para crear y cargar la cuenta de servicio:

1. **Acceder a Google Cloud Console:**
   - Dirigirse a [Google Cloud Console - IAM & Admin](https://console.cloud.google.com/iam-admin/serviceaccounts).
   - Seleccionar el proyecto **`daractivosdigitales`**.

2. **Crear la Cuenta de Servicio:**
   - Hacer clic en **Crear cuenta de servicio** (`Create Service Account`).
   - **Nombre**: `github-actions-deployer` (o similar).
   - **ID**: `github-actions-deployer`.
   - **Descripción**: `Cuenta de servicio para CI/CD de GitHub Actions en Firebase Hosting`.
   - Clic en **Crear y continuar**.

3. **Asignar Roles Requeridos:**
   - Asignar el rol:
     - **Administrador de Firebase Hosting** (`roles/firebasehosting.admin` / `Firebase Hosting Admin`).
   - Clic en **Continuar** y luego en **Listo**.

4. **Generar la Clave Privada JSON:**
   - En la lista de cuentas de servicio, hacer clic sobre la cuenta recién creada.
   - Ir a la pestaña **Claves** (`Keys`) > **Agregar clave** (`Add key`) > **Crear nueva clave** (`Create new key`).
   - Seleccionar tipo **JSON** y presionar **Crear**.
   - Se descargará un archivo `.json` a su equipo local.

5. **Cargar el Secreto en GitHub:**
   - En el repositorio de GitHub (`landingpage-daractivosdigitales.com.ar`):
   - Ir a **Settings** > **Secrets and variables** > **Actions**.
   - Clic en **New repository secret**.
   - **Name**: `FIREBASE_SERVICE_ACCOUNT_DARACTIVOSDIGITALES`
   - **Secret**: Pegar el contenido íntegro del archivo JSON descargado (incluyendo `{ ... }`).
   - Clic en **Add secret**.
   - *Seguridad:* Una vez cargado el secreto en GitHub, eliminar de forma segura el archivo JSON descargado de su disco local.

---

## 3. Plan B: Runner Self-Hosted Local en Servidor Casero (`merlina-asus`)

> [!CAUTION]
> **REGLA DE SEGURIDAD CRÍTICA:**
> Los runners self-hosted **NUNCA** deben habilitarse en repositorios públicos de GitHub, ya que cualquier usuario externo podría abrir un Pull Request con código arbitrario y ejecutar comandos en su red local.
> El Plan B aplica **ÚNICAMENTE** si el repositorio se configura como **Privado**.

Si el repositorio es privado y se desea ejecutar los builds en hardware propio para ahorrar minutos o aprovechar entornos locales:

### Entorno asignado
- **Equipo físico asignado:** Notebook `merlina-asus` (entorno de pruebas y staging).
- **Prohibición estricta:** **NUNCA** instalar en `turno-server` (servidor de producción de turnos).
- **Aislamiento:** Debe ser una instancia **nueva e independiente**, con su propio directorio y servicio systemd, sin interferir con la instancia existente de `merlina`.

### Procedimiento de Instalación en `merlina-asus`

1. **Crear usuario y directorio dedicado:**
   ```bash
   sudo useradd -m -s /bin/bash runner-dar
   sudo usermod -aG docker runner-dar  # Si requiere docker
   sudo su - runner-dar
   mkdir -p ~/actions-runner-dar-sitio && cd ~/actions-runner-dar-sitio
   ```

2. **Descargar e instalar el runner oficial de GitHub Actions:**
   ```bash
   curl -o actions-runner-linux-x64.tar.gz -L https://github.com/actions/runner/releases/download/v2.321.0/actions-runner-linux-x64-2.321.0.tar.gz
   tar xzf ./actions-runner-linux-x64.tar.gz
   ```

3. **Obtener Token de Registro en GitHub:**
   - En el repositorio privado: **Settings** > **Actions** > **Runners** > **New self-hosted runner**.
   - Copiar el token temporal generado.

4. **Configurar el Runner con etiqueta exclusiva:**
   ```bash
   ./config.sh --url https://github.com/RaskovskyDavid/landingpage-daractivosdigitales.com.ar \
     --token <REGISTRATION_TOKEN> \
     --name merlina-asus-dar-sitio \
     --labels dar-sitio \
     --work _work \
     --unattended
   ```

5. **Instalar e iniciar el servicio systemd:**
   ```bash
   sudo ./svc.sh install runner-dar
   sudo ./svc.sh start
   sudo ./svc.sh status
   ```

6. **Activar el runner en GitHub:**
   - En GitHub: **Settings** > **Secrets and variables** > **Actions** > pestaña **Variables**.
   - Crear o modificar la variable `RUNNER`:
     - **Name**: `RUNNER`
     - **Value**: `["self-hosted", "dar-sitio"]`
   - Para regresar a runners gratuitos de GitHub en cualquier momento: eliminar la variable o setearla en `"ubuntu-latest"`.
