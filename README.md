ESPAÑOL
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
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc source ~/.bashrc

3. Clonar el Repositorio
   Clona este repositorio en tu máquina local:
   git clone https://github.com/tu-usuario/CHAT-PUBLICO-MOTOKO.git
   cd CHAT-PUBLICO-MOTOKO

4. Configurar el Proyecto
   Dentro del directorio del proyecto, instala las dependencias necesarias para el frontend utilizando npm:
   cd src/chat_publico_motoko_frontend npm install

5. Iniciar el Proyecto Localmente
   Para ejecutar el proyecto en tu máquina local, usa los siguientes comandos:
   Inicia el entorno de desarrollo de DFX:
   dfx start --background

   Despliega el proyecto en la red local:
   dfx deploy
   Esto desplegará todos los canisters (el backend de Motoko y el frontend) en el entorno local de Internet Computer.


ENGLISH
CHAT-PUBLICO-MOTOKO
This project implements a simple public chat using Motoko on the Internet Computer (IC) network. Users can send and receive messages, and the whole system is based on the use of canisters in IC.

Steps to run the project
1. Prerequisites
   Make sure you have the following installed:
   Node.js (version 14 or higher): Download Node.js
   DFX (Internet Computer Development SDK): Install DFX
   Git: Download Git
   Motoko: Installed automatically when installing DFX.

2. Install DFX
   If you don't have DFX installed yet, follow these steps:

   Run the following command in your terminal to install DFX:
   sh -ci “$(curl -fsSL https://sdk.dfinity.org/install.sh)”

   Verify the installation:
   dfx --version

   If you are on a Unix-based system, you can add dfx to the PATH like this:
   echo 'export PATH=“$HOME/.local/bin:$PATH”' >> ~/.bashrc source ~/.bashrc

3. Clone the Repository
   Clone this repository on your local machine:
   git clone https://github.com/tu-usuario/CHAT-PUBLICO-MOTOKO.git
   cd CHAT-PUBLIC-MOTOKO

4. Configure the Project
   Inside the project directory, install the necessary dependencies for the frontend using npm:
   cd src/chat_publico_chat_motoko_frontend npm install

5. Start the Project Locally
   To run the project on your local machine, use the following commands:
   Start the DFX development environment:
   dfx start --background

   Deploy the project to the local network:
   dfx deploy
   This will deploy all canisters (the Motoko backend and frontend) to the local Internet Computer environment.
