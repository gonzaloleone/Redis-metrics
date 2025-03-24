import { NextResponse } from "next/server";
import redis from "@/lib/redis";

// Endpoint para guardar una métrica
export async function POST(req: Request) {
  const { metric, value } = await req.json();
  await redis.incrby(metric, value); 
  return NextResponse.json({ success: true });
}

// Endpoint para obtener métricas
export async function GET() {
  const metrics = await redis.mget(["visits", "clicks", "signups"]); 
  return NextResponse.json({
    visits: Number(metrics[0]) || 0,
    clicks: Number(metrics[1]) || 0,
    signups: Number(metrics[2]) || 0,
  });
}