import Time "mo:base/Time";
import Array "mo:base/Array";
import List "mo:base/List";
import Text "mo:base/Text";

actor ChatPublico {

    type Message = {
        sender: Text;
        content: Text;
        timestamp: Int;
    };

    var messages: [Message] = [];

    // Función para enviar un mensaje
    public shared({caller}) func sendMessage(sender: Text, content: Text) : async Bool {
        let newMessage = {
            sender = sender;
            content = content;
            timestamp = Time.now();
        };

        // Agrega el mensaje a la lista de mensajes
        messages := Array.append(messages, [newMessage]);

        // Limita el número de mensajes a un máximo de 100
        let maxMessages = 100;
        if (Array.size(messages) > maxMessages) {
            messages := List.toArray(List.drop(List.fromArray(messages), Array.size(messages) - maxMessages));
        };

        return true;
    };

    // Función para obtener los mensajes
    public shared func getMessages() : async [Message] {
        return messages;
    };

    // Función para borrar todos los mensajes
    public shared func clearMessages() : async Bool {
        messages := []; // Vaciar la lista de mensajes
        return true;
    };
}
