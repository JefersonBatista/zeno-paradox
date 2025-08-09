import { useState } from "react";
import Line from "./components/Line";
import "./App.css";

function App() {
  const [achilles, setAchilles] = useState<number>(0);
  const [tortoise, setTortoise] = useState<number>(100);

  return <Line />;
}

export default App;
