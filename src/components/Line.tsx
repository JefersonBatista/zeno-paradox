import { useState } from "react";
import "./Line.css";
import Achilles from "../assets/achilles.jpg";
import Tortoise from "../assets/tortoise.jpg";

function Line() {
  const [achilles, setAchilles] = useState<number>(300);
  const [tortoise, setTortoise] = useState<number>(950);

  return (
    <div className="line">
      <img
        src={Achilles}
        alt="Achilles"
        style={{ marginLeft: `${achilles}px` }}
      />
      <img
        src={Tortoise}
        alt="Tortoise"
        style={{ marginRight: `calc(1000px - ${tortoise}px)` }}
      />
    </div>
  );
}

export default Line;
