import "./Commands.css";

function Commands({
  restart,
  advance,
}: {
  restart: () => void;
  advance: () => void;
}) {
  return (
    <div className="commands">
      <button onClick={restart}>Reiniciar</button>
      <button onClick={advance}>Avançar</button>
    </div>
  );
}

export default Commands;
