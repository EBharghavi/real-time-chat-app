// chat.js
const socket = io();

// Get the form, input, and message list elements
const form = document.getElementById('form');
const messageInput = document.getElementById('message-input');
const messagesList = document.getElementById('messages');
const serverInfo = document.getElementById('server-info');

// Listen for the server info message
socket.on('server info', function(data) {
    serverInfo.textContent = `Connected to: ${data.serverName}`; // Display server name
});

// Handle form submission to send a message
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on form submit

    const message = messageInput.value;

    if (message) {
        socket.emit('chat message', message); // Emit message to the server
        messageInput.value = ''; // Clear the input field
    }
});

// Listen for incoming chat messages
socket.on('chat message', function(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    messagesList.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the latest message
});
