const net = require("net");
const { IP, PORT } = require("./constants");
// const setupInput = require("./input")
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
});

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("data", (data) => {
    console.log("Incoming data:", data);
    // process the incoming data here
  });

  return conn;
};

module.exports = {connect};