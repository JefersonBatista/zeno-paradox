import { useState } from "react";
import "./Demo.css";
import Achilles from "../assets/achilles.jpg";
import Tortoise from "../assets/tortoise.jpg";

function Demo() {
  const [achilles, setAchilles] = useState<number>(0);
  const [tortoise, setTortoise] = useState<number>(480);

  return (
    <>
      <div className="demo">
        <img
          src={Achilles}
          alt="Achilles"
          style={{ marginLeft: `${achilles}px` }}
        />
        <img
          src={Tortoise}
          alt="Tortoise"
          style={{ marginLeft: `${tortoise}px` }}
        />
        <div className="line" />
      </div>
      <button>Avançar</button>
    </>
  );
}

export default Demo;
