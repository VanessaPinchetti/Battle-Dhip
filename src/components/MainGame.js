import { useState, useEffect } from "react";
import EnemyBoard from "./AttackableBoard";
import Gameboard from "./Gameboard";
import { getSmartPos } from "../logic/playerAi";
import BoardHitsMisses from "./BoardHitsMisses";
import RenderShips from "./RenderShips";
import StyledBoardContainer from "../styled-components/styled-gameboards-container";

function MainGame({ useBoardPlayer, useBoardNpc, onGameOver }) {
  const [playerBoard, setPlayerBoard] = useBoardPlayer;
  const [npcBoard, setNpcBoard] = useBoardNpc;
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    if (npcBoard.isEveryShipSunk()) {
      onGameOver("Player");
    } else if (playerBoard.isEveryShipSunk()) {
      onGameOver("NPC");
    }
  }, [playerBoard, npcBoard, onGameOver]);

  
  const npcTurn = () => {
    setPlayerBoard((prev) => prev.receiveHit(getSmartPos(prev)));
  };

  
  const incrementTurn = () => {
    npcTurn();
    setTurn((prev) => prev + 1);
  };

  
  const getSunkCount = (gameBoard) =>
    gameBoard.ships.reduce(
      (acc, ship) => (ship.isSunk() ? acc - 1 : acc),
      gameBoard.ships.length
    );

  return (
    <div>
      <div className="fw-light mt-4" style={{fontFamily: "sans-serif", color: "#8b6685", fontSize: "20px"}}>Turno: {turn}</div>
      <div className="boardgame">
      <StyledBoardContainer>
        <div>
          <h2 style={{fontFamily: "sans-serif", color: "#8b6685", fontSize: "30px", marginTop: "10%"}}>Flota Enemiga</h2>
          <EnemyBoard
            gameboard={npcBoard}
            setGameboard={setNpcBoard}
            onAttack={incrementTurn}
          />
          <p className="fst-lighter mt-2" style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#8b6685"}}>Barcos restantes del enemigo: {getSunkCount(npcBoard)}</p>
        </div>
        <div>
          <h2 style={{fontFamily: "sans-serif", color: "#8b6685", fontSize: "30px" , marginTop: "10%"}}>Tu Flota</h2>
          <Gameboard gameboard={playerBoard}>
            <BoardHitsMisses
              hits={playerBoard.hits}
              misses={playerBoard.misses}
            />
            <RenderShips ships={playerBoard.ships} />
          </Gameboard>
          <p className="fst-lighter mt-2" style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#8b6685"}}>Tus barcos restantes: {getSunkCount(playerBoard)}</p>
        </div>
      </StyledBoardContainer>
      </div>
    </div>
  );
}

export default MainGame;
