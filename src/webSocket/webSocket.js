import WEBSOCKET_URL from 'constants';

const socket = new WebSocket(WEBSOCKET_URL);

// Connection Opened
socket.addEventListener('open', function() {
  console.log('Connected to WS server');
});

// Listen for Messages
socket.addEventListener('message', function(event) {
  console.log('Message from server: ', event.data);
});

// const wsSendMessage = () => {
//   socket.send('Hello from client');
// };

export default socket;