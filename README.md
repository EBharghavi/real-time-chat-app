# **Real-Time Chat Application**

This is a **real-time chat application** built with **Node.js**, **Express**, and **Socket.IO**. The app allows users to send messages in a live chat environment. The application runs on two different servers (Server 1 and Server 2), and each server has a distinct color to differentiate them.

## **Features**
- **Real-time messaging** using **Socket.IO**.
- **Dynamic color** for each server (Server 1 has blue, Server 2 has pink).
- Users can send messages by clicking the **Send** button or pressing the **Enter** key.
- **Multiple users** can connect and chat at the same time.

## **Technologies Used**
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Socket.IO**: Real-time web socket communication.
- **HTML/CSS**: Frontend markup and styling.

## **Prerequisites**
Before you begin, ensure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): Comes with Node.js installation.

## **Getting Started**

### **1. Clone the Repository**
Clone this repository to your local machine:
```bash
git clone https://github.com/EBharghavi/real-time-chat-app.git
cd real-time-chat-app
```
### **2. Install Dependencies**
Run the following command to install the required dependencies:
```bash
npm install
```
### **3. Start the Servers**
You will need to run two different server instances (Server 1 and Server 2) on separate ports:

- Server 1:
This server will run on port 3001 with a blue background.  
Run the following command in the project directory:
```bash
node server1.js
```
- Server 2:
This server will run on port 3002 with a pink background.  
Open a new terminal window and run the following command:
```bash
node server2.js
```
Both servers will run simultaneously on their respective ports.

### **4. Open the Application in Your Browser**
- For Server 1, go to http://localhost:3001.
- For Server 2, go to http://localhost:3002.
Each server will display a different background color and identify itself as Server 1 or Server 2.

### **5. Start Chatting**
Type a message in the input field and press Send or hit the Enter key.  
Your message will be displayed in real-time for all connected users on the same server.

## **Folder Structure**
The project has the following folder structure:  
real-time-chat-app/  
├── public/  
│   └── index.html           # Frontend HTML (Chatbox UI)  
├── server1.js               # Server 1 (Express server with Socket.IO on port 3001)  
├── server2.js               # Server 2 (Express server with Socket.IO on port 3002)  
├── package.json             # Node.js project dependencies and scripts  
├── README.md                # Project documentation  
└── node_modules/            # Installed npm packages  

