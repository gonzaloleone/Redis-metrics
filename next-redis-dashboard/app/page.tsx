"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [metrics, setMetrics] = useState({ visits: 0, clicks: 0, signups: 0 });

  useEffect(() => {
    async function fetchMetrics() {
      const res = await fetch("/api/metrics");
      const data = await res.json();
      setMetrics(data);
    }
    fetchMetrics();
  }, []);

  async function handleMetric(metric: string) {
    await fetch("/api/metrics", {
      method: "POST",
      body: JSON.stringify({ metric, value: 1 }),
      headers: { "Content-Type": "application/json" },
    });
    location.reload();
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard de Métricas</h1>
      <p>Visitas: {metrics.visits}</p>
      <p>Clicks: {metrics.clicks}</p>
      <p>Registros: {metrics.signups}</p>
      <button onClick={() => handleMetric("visits")} className="p-2 m-2 bg-blue-500 text-white">Sumar Visita</button>
      <button onClick={() => handleMetric("clicks")} className="p-2 m-2 bg-green-500 text-white">Sumar Click</button>
      <button onClick={() => handleMetric("signups")} className="p-2 m-2 bg-red-500 text-white">Sumar Registro</button>
    </div>
  );
}
