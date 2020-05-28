import { Socket } from 'socket.io';
import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets';

@WebSocketGateway()
export class StringGateway {
  @SubscribeMessage('call/string/reverse')
  onCallStringReverse(client: Socket, string: string): void {
    try {
      const reversed = [...string].reverse().join('');
      client.emit('success/string/reverse', reversed);
    } catch (e) {
      client.emit('failure/string/reverse', e.toString());
    }
  }
}
