import { useState } from "react";
import Commands from "./Commands";
import "./Demo.css";
import Achilles from "../assets/achilles.jpg";
import Tortoise from "../assets/tortoise.jpg";

function Demo() {
  const [achilles, setAchilles] = useState<number>(0);
  const [tortoise, setTortoise] = useState<number>(320);

  const restart = () => {
    setAchilles(0);
    setTortoise(320);
  };

  const advance = () => {
    setAchilles(tortoise);
    setTortoise((prev) => prev + (2 * (tortoise - achilles)) / 3);
  };

  return (
    <>
      <span style={{ marginBottom: "30px" }}>
        Aquiles corre com 1,5x da velocidade da Tartaruga
      </span>
      <div className="demo">
        <img
          src={Achilles}
          alt="Achilles"
          style={{ transform: `translateX(${achilles}px)` }}
        />
        <img
          src={Tortoise}
          alt="Tortoise"
          style={{ transform: `translateX(${tortoise}px)` }}
        />
        <div className="line" />
      </div>
      <Commands restart={restart} advance={advance} />
      <span style={{ marginTop: "30px" }}>
        Distância entre Aquiles e a Tartaruga: {tortoise - achilles}
      </span>
    </>
  );
}

export default Demo;
