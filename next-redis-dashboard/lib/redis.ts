import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
});

redis.on("connect", () => {
  console.log("Conectado a Redis");
});

redis.on("error", (err) => {
  console.error("Error en Redis:", err);
});

export { redis };