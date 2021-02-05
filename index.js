const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
// const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   res.send("Hello World");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

const PORT = 3000;
const HOST = "0.0.0.0";

http.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:${PORT}/`);
});
