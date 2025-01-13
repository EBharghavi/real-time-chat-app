const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3001;

// Serve static files
app.use(express.static('public'));

// Handle incoming socket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Emit server info (color and name) when a user connects
    socket.emit('server info', { serverName: 'Server 1', color: 'blue' });

    // Listen for chat messages from the client
    socket.on('chat message', (msg) => {
        // Broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server 1 is running at http://localhost:${port}`);
});
