import { useEffect, useState } from "react";

export function Converter() {
  const [euro, setEuro] = useState(1);
  const [dollar, setDollar] = useState(1.08);

  useEffect(() => {
    setDollar(() => euro * 1.08);
  }, [euro]);

  useEffect(() => {
    setEuro(() => dollar / 1.08);
  }, [dollar]);

  return (
    <div>
      <h1>Converter</h1>
      <p>Euro</p>
      <input
        type="number"
        value={euro}
        onChange={(e) => setEuro(e.target.value)}
      />
      <p>Dollar</p>
      <input
        type="number"
        value={dollar}
        onChange={(e) => setDollar(e.target.value)}
      />
    </div>
  );
}
