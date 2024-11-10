CHAT-PUBLICO-MOTOKO
Este proyecto implementa un chat público simple utilizando Motoko en la red de Internet Computer (IC). Los usuarios pueden enviar y recibir mensajes, y todo el sistema está basado en el uso de canisters en IC.

Pasos para ejecutar el proyecto
1. Requisitos previos
Asegúrate de tener instalado lo siguiente:
Node.js (versión 14 o superior): Descargar Node.js
DFX (SDK de desarrollo de Internet Computer): Instalar DFX
Git: Descargar Git
Motoko: Instalado automáticamente al instalar DFX.

2. Instalar DFX
Si aún no tienes instalado DFX, sigue estos pasos:

Ejecuta el siguiente comando en tu terminal para instalar DFX:
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

Verifica la instalación:
dfx --version

Si estás en un sistema basado en Unix, puedes agregar dfx al PATH de esta manera:
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

3. Clonar el Repositorio
Clona este repositorio en tu máquina local:
git clone https://github.com/tu-usuario/CHAT-PUBLICO-MOTOKO.git
cd CHAT-PUBLICO-MOTOKO

4. Configurar el Proyecto
Dentro del directorio del proyecto, instala las dependencias necesarias para el frontend utilizando npm:
cd src/chat_publico_motoko_frontend
npm install

5. Iniciar el Proyecto Localmente
Para ejecutar el proyecto en tu máquina local, usa los siguientes comandos:
Inicia el entorno de desarrollo de DFX:
dfx start --background

Despliega el proyecto en la red local:
dfx deploy
Esto desplegará todos los canisters (el backend de Motoko y el frontend) en el entorno local de Internet Computer.
