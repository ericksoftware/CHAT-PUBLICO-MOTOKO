import { html, render } from 'lit-html';
import { prueba_backend } from 'declarations/prueba_backend'; // Asegúrate de que este sea el actor que interactúa con Motoko

class App {
  greeting = '';
  messages = [];

  constructor() {
    this.#render();
    this.#loadMessages(); // Cargar los mensajes al inicializar la aplicación
  }

  // Método para enviar un mensaje
  #handleSubmit = async (e) => {
    e.preventDefault();
    const sender = document.getElementById('username').value;
    const content = document.getElementById('message').value;

    // Enviar mensaje al backend
    const success = await prueba_backend.sendMessage(sender, content);
    if (success) {
      this.#loadMessages(); // Recargar los mensajes después de enviar
    }
  };

  // Método para cargar los mensajes desde el backend
  #loadMessages = async () => {
    this.messages = await prueba_backend.getMessages();
    this.#render(); // Asegurarnos de que se rendericen los mensajes después de la carga
  };

  // Método para borrar todos los mensajes
  #clearMessages = async () => {
    await prueba_backend.clearMessages(); // Llamada para borrar los mensajes en el backend
    this.#loadMessages(); // Recargar la lista de mensajes después de borrarlos
  };

  // Renderizar la vista
  // Renderizar la vista
#render() {
  let body = html`
    <div class="container mt-5">
      <h1 class="text-center mb-4">Chat Motoko</h1>

      <!-- Formulario para enviar mensajes -->
      <div class="mb-4">
        <label for="username" class="form-label">Nombre de usuario</label>
        <input type="text" id="username" class="form-control" placeholder="Tu nombre" required>
      </div>
      <div class="mb-4">
        <label for="message" class="form-label">Mensaje</label>
        <textarea id="message" class="form-control" rows="3" placeholder="Escribe tu mensaje aquí..." required></textarea>
      </div>
      <button @click=${this.#handleSubmit} class="btn btn-primary w-100">Enviar mensaje</button>

      <!-- Botones para borrar y actualizar los mensajes -->
      <div class="mt-4 d-flex justify-content-between">
        <button @click=${this.#clearMessages} class="btn btn-danger">Borrar todos los mensajes</button>
        <button @click=${this.#loadMessages} class="btn btn-secondary">Actualizar mensajes</button>
      </div>

      <!-- Caja de mensajes -->
      <div id="chat-box" class="chat-box mt-4">
        ${this.messages.length === 0
          ? html`<p>No hay mensajes</p>`
          : this.messages.map((msg) => html`
              <div class="message mb-2">
                <strong>${msg.sender}</strong>: ${msg.content}
                <span class="timestamp">(${new Date(Number(msg.timestamp) / 1000000).toLocaleString()})</span>
              </div>
            `)}
      </div>
    </div>
  `;
  render(body, document.getElementById('root'));
}
}

export default App;
