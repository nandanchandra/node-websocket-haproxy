import http from "http";
import ws from "websocket"
import redis from "redis";


const Server = ws.server


const subscriber = redis.createClient({
  port      : 6379,              
  host      : 'rds'} );

const publisher = redis.createClient({
  port      : 6379,              
  host      : 'rds'} );


