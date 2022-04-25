import { inject, onMounted } from "vue";
import { Socket } from "socket.io-client";

export function io() {
  const socket = inject('socket') as Socket;

  function onConnect() {
    return socket.on('connect', () => {
      console.log('connected');
    });
  }

  function emitMessage(message: string) {
    return socket.emit('message', message);
  }

  function onReceiveMessage() {
    return socket.on('receive-message', (message: string) => {
      console.log(message);
    });
  }

  function ioMountend() {
    onConnect()
    emitMessage('hello')
    onReceiveMessage()
  }

  return {
    onConnect,
    ioMountend
  }
}
