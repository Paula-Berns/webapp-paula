import { useEffect, useState } from "react";

export function Hooks() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (selectedButton) {
      setCount((count) => count + 1);
    }
  }, [selectedButton]);

  return (
    <div>
      <button onClick={() => setSelectedButton(1)}>1</button>
      <button onClick={() => setSelectedButton(2)}>2</button>
      <button onClick={() => setSelectedButton(3)}>3</button>

      <p> selectedButton: {selectedButton}</p>
      <p>count: {count}</p>
    </div>
  );
}
