import {io, ManagerOptions, SocketOptions} from "socket.io-client";
import { App } from "vue";

interface Socket {
  connection: string
  options?:  Partial<ManagerOptions & SocketOptions> | undefined
}
export default {
  install: (app: App<Element>, {connection, options}: Socket) => {
    const socket = io(connection, options);
    app.config.globalProperties.$socket = socket;
    app.provide("socket", socket);
  },
};
