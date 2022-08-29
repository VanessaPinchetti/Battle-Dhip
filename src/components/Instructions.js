export default function Instructions({ onContinue }) {
  return (
    <div>
      <h2 className="title2 mb-2 fw-bold" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#8b6685" }}>¿Cómo Jugar?</h2>
      <p className="text" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#8b6685" }}>Battleship es un juego de adivinanza y estrategia.</p>
      

      <div className="card" style={{ width: "28rem" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKqRGVN3gIAh4F8cLessT4YAi3Zo2rLQb4Q&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-decoration-underline" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#8b6685" }}>Instrucciones</h5>
          <p className="card-text" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#8b6685" }}  >Cada jugador ubicará sus barcos en la cuadrícula horizontal sin que su oponente vea donde están ubicados. Se pueden ubicar de manera horizontal o vertical nunca diagonal. Los barcos pueden tocarse en los extremos pero nunca uno sobre el otro. Los jugadores toman turnos para atacar a su oponente.</p>
          <button onClick={onContinue} className="btn btn-outline-light gradient-custom" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>Jugar</button>
          {/* className="btn btn-dark mt-5 mb-5 ps-3 pe-3" */}
          {/* style={{fontFamily: "sans-serif", color:"#ddd5dd"}} */}
        </div>
      </div>
    </div>
  );
}

