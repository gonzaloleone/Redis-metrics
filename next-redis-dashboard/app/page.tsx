"use client";

import { useState, useEffect } from "react";
import { getClickCount, incrementClickCount } from "./actions/click-action";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  // Obtener la cantidad de clics al cargar la página
  useEffect(() => {
    async function fetchClicks() {
      const count = await getClickCount();
      setClicks(count);
    }
    fetchClicks();
  }, []);

  // Función para manejar el clic en el botón
  const handleClick = async () => {
    const newCount = await incrementClickCount();
    setClicks(newCount);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🖱️ Contador de Clics</h1>
      <button onClick={handleClick} style={{ fontSize: "18px", padding: "10px 20px" }}>
        Clics: {clicks}
      </button>
    </div>
  );
}
