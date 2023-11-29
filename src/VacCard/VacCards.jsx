import { VacCard } from "./VacCard";
import paris from "./paris.jpg";
import porto from "./porto.jpg";
import { useState } from "react";
import "./VacCard.css";

export function VacCards() {
  const [usePicture, setPicture] = useState(paris);

  return (
    <>
      <VacCard titel={"Choose your dream vacation"} />
      <div className="bothButtons">
        <button
          className="vacButton"
          type="Porto"
          onClick={() => setPicture(porto)}
        >
          Porto
        </button>
        <button
          className="vacButton"
          type="Paris"
          onClick={() => setPicture(paris)}
        >
          Paris
        </button>
      </div>
      <VacCard picture={usePicture} />
          
    </>
  );
}
