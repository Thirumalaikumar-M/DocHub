import express from "express";
import http, { Server } from "http";
import { Server as socketIo } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const PORT = 3001;

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("send-changes", (delta) => {
    socket.broadcast.emit("receive-changes", delta);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// server.listen(PORT, () => {
//   console.log(`Server is running on PORT: ${PORT}`);
// });
