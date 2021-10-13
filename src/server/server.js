const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: server });

wss.on('conncection', ws => {

  console.log('A new client connected!');

  ws.send('Welcome new client!');

  ws.on('message', message => {

    console.log('Received message: ', message);

    wss.clients.forEach( client => {

      if (client !== ws && client.readyState === WebSocket.OPEN) {

        client.send(message);

      }
    });
  });

  ws.on('close', () => {

    console.log('Client has disconnected');

  });
});

app.get('/', (req,res) => res.send('Hello World!'));

const PORT = 5000;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));