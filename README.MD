# DOCKER COMMAND

1-->docker build -t chatapp .

2-->docker-compose up

# What it is?

1--> open browser (chrome) |--> inspect |--> console

2--> ws = new WebSocket("ws://localhost:8080");
     ws.onmessage = message => console.log(`Received: ${message.data}`);
     ws.send("pseudo Chatapp")