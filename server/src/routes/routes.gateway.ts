import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class RoutesGateway implements OnGatewayConnection {
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any) {
    client.emit.t('receive-message', payload);
  }

  handleConnection(client: Socket, ...args: any[]): any {
    console.log(client.id);
  }
}
