const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", ()=>{
    console.log("Successfully connected to game server");
    Great work! Now, the truth is that we don't want our snake to automatically move up one square each time we connect.

    Instruction
    Comment out or remove the "hard-coded" Move: up message to the server.
    
    Conclusion
    We're making progress! After learning the move command, we experimented with it in order to better understand the game server.
    
    
  });

  conn.on("data", (data) => {
    console.log("Incoming data:", data);
    // process the incoming data here
  });
  
  return conn;
};

module.exports = connect ;