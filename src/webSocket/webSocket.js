import { message } from 'antd';
import { WEB_SOCKET_URL } from '../constants';

const socket = new WebSocket(WEB_SOCKET_URL);

// Connection Opened
socket.onopen = () => {
  console.log('Connected to WS server');
  console.log('WebSocket readyState: ', socket.readyState);
  message.info('WebSocket connection success');
  
  socket.send('Hello from client');
};

// Listen for Messages
socket.onmessage = event => {
  console.log('Message from server: ', event.data);

  message.info(`Message from server: ${event.data}`);
};

// Connection Closed
socket.onclose = () => {
  message.info('WebSocket connection was closed');
};

// Has Error
socket.onerror = event => {
  message.error('WebSocket error observed');
  console.log('WebSocket error observed: ', event);
};

// const wsSendMessage = () => {
//   socket.send('Hello from client');
// };

// wsSendMessage();