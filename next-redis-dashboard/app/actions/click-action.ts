"use server";

import redis from "@/lib/redis";

// Función para obtener la cantidad de clics
export async function getClickCount() {
  const clicks = await redis.get("clicks");
  return clicks ? parseInt(clicks, 10) : 0;
}

// Función para incrementar el contador de clics
export async function incrementClickCount() {
  const newCount = await redis.incr("clicks");
  return newCount;
}