export default function Instructions({ onContinue }) {
  return (
    <div>
      <h2 className="title2 mb-2">¿Cómo se juega?</h2>
      <p className="text">Battleship es un juego de adivinanza y estrategia.</p>
      <p className="text">
        Tienes que descubrir donde están los barcos enemigos y destruilos antes que destruyan los tuyos.
      </p>

      <button onClick={onContinue} className="btn btn-dark mt-5 mb-5 ps-3 pe-3">Jugar</button>
    </div>
  );
}
