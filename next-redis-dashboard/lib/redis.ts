import Redis from ""; //tuve algunos problemas con la instalacion de redis, estoy tratando de solucionar eso

const redis = new Redis({
  host: "127.0.0.1", 
  port: 6379, 
});

export default redis;