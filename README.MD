# DOCKER COMMAND

1-->docker build -t chatapp .

2-->docker-compose up

# What it is?

1--> open browser (chrome) |--> inspect |--> console

<!-- Open mulinumber of browser -->
2a--> ws = new WebSocket("ws://localhost:8080");

2b--> ws.onmessage = message => console.log(`Received: ${message.data}`);
     
2c--> ws.send("pseudo Chatapp")