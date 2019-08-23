const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const UsersService = require("./UsersService");
// --------- requirements ---------------

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const usersService = new UsersService();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

// ------ socket.io listening: socket - user connecting
io.on("connection", socket => {
    // when client connects (socket)
    socket.on("join", name => {
        // user's name is saved on connection to the chat
        usersService.addUser({
            id: socket.id,
            name
        });
        // emit update of users list connected to all connected users
        io.emit("update", {
            users: usersService.getAllUsers()
        });
    });

    // when client disconects from the chat (broadcast - info to the others)
    socket.on("disconnect", () => {
        usersService.removeUser(socket.id);
        socket.broadcast.emit("update", {
            users: usersService.getAllUsers()
        });
    });

    // user sending message emits to all others (broadcast)
    socket.on("message", message => {
        // destructurization
        const { name } = usersService.getUserById(socket.id);
        socket.broadcast.emit("message", {
            text: message.text,
            from: name
        });
    });
});

// --------- server listening ---------------
server.listen(3000, () => {
    console.log("listening on *:3000");
});
