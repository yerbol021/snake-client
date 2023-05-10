const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // conn.write("Name: YER");
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });

  const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    };
    // your code here
  };

  conn.on("data", handleUserInput);

  conn.on("data", (data) => {
    console.log("Incoming data:", data);
    // process the incoming data here
  });

  return conn;
};

module.exports = connect;