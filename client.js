const net = require("net");
// const setupInput = require("./input")
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
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