import http from "http";
import ws from "websocket"
import redis from "redis";


const Server = ws.server


const subscriber = redis.createClient({
port      : 6379,              
host      : 'rds'
});

const publisher = redis.createClient({
port      : 6379,              
host      : 'rds'
});


// Connection to Subscriber/Client
subscriber.on("subscribe", function(channel, count) {
    console.log(`Server ${APPID} subscribed  to Groupchat`)
    publisher.publish("Groupchat", "initiate");
});



// Message from publisher to all subscribers
subscriber.on("message", function(channel, message) {
    try{

    console.log(`Server ${APPID} received message in channel ${channel} msg: ${message}`);
    connections.forEach(c => c.send(APPID + ":" + message))
    }
    catch(ex){
    console.log("ERR::" + ex)
    }
});
subscriber.subscribe("Groupchat");


// Http server initiate
const httpserver = http.createServer()

// Get request to initiate Webscoket
const websocket = new WebSocketServer({
    "httpServer": httpserver
})


httpserver.listen(8080, () => console.log("Listening on port 8080"))


// Three Way Handshaking Webscoket
websocket.on("request", request=> {

    const con = request.accept(null, request.origin)
    
    con.on("open", () => console.log("opened"))
    con.on("close", () => console.log("CLOSED!!!"))
    con.on("message", message => {
        //publish the message to redis
        console.log(`${APPID} Received message ${message.utf8Data}`)
        publisher.publish("Groupchat", message.utf8Data)
    })

    setTimeout(() => con.send(`Connected successfully to server ${APPID}`), 5000)
    connections.push(con)
})