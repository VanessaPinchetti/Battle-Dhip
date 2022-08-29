import React, { useState } from "react";
import gameboard from "./logic/gameboard";
import MainGame from "./components/MainGame";
import * as ai from "./logic/playerAi";
import GameSetup from "./components/GameSetup";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";
import {TbShip} from 'react-icons/tb';
import {FaSadCry} from 'react-icons/fa';
import {BiHappyAlt} from 'react-icons/bi';




const GAME_MODES = {
  rules: "rules",
  setup: "setup",
  main: "main",
  gameOver: "game over",
};

function App() {
  
  const useBoardPlayer = useState(() => gameboard(10));

  const useBoardNpc = useState(() =>
    gameboard(10).addShips(ai.getShips(gameboard(10)))
  );

  const [gameScene, setGameScene] = useState({ mode: GAME_MODES.rules });

  // Inicio del juego
  const initializeGame = () => {
    const [, setPlayerBoard] = useBoardPlayer;
    const [, setNpcBoard] = useBoardNpc;

    setPlayerBoard(gameboard(10));
    setNpcBoard(gameboard(10).addShips(ai.getShips(gameboard(10))));
    setGameScene({ mode: GAME_MODES.setup });
  };

  const onGameOver = (winner) => {
    setGameScene({ mode: GAME_MODES.gameOver, winner });
  };

  // Instruciones
  const renderInstructions = () => (
    <Instructions onContinue={() => setGameScene({ mode: GAME_MODES.setup })} />
  );

  
  const renderSetup = () => (
    <GameSetup
      useBoard={useBoardPlayer}
      onAllShipsPlaced={() => setGameScene({ mode: GAME_MODES.main })}
    />
  );

  const renderMainGame = () => (
    <MainGame
      useBoardPlayer={useBoardPlayer}
      useBoardNpc={useBoardNpc}
      onGameOver={onGameOver}
    />
  );

  
  const renderGameOver = () => (
    <>
      {gameScene.winner === "Player" ? (
        <h2 className="mt-5 p-2"> style={{fontFamily: "Trebuchet MS", color: "#8b6685"}}¡Felicidades! <br/>  <BiHappyAlt/> <br/> ¡Ganaste!</h2>
      ) : (
        <h2 className="mt-5 p-2"  style={{fontFamily: "Trebuchet MS", color: "#8b6685"}}>Mala Suerte <br/>  <FaSadCry/>  <br/>¡Perdiste!</h2> 
      )}


      <button className="btn btn-outline-light gradient-custom" style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}
      onClick={() => initializeGame()}>¿Quieres vovler a Jugar?</button>
    </>
  );

  const selectRenderMode = (mode) => {
    switch (mode) {
      case GAME_MODES.rules:
        return renderInstructions();
      case GAME_MODES.main:
        return renderMainGame();
      case GAME_MODES.setup:
        return renderSetup();
      case GAME_MODES.gameOver:
        return renderGameOver();
      default:
        throw new Error(`Unhandled game mode: ${mode}!`);
    }
  };

  return (
    <div className="text-center justify-content-center">
      <div className="title">
      
        <h1 className="title1" style={{fontFamily:"fantasy", background: "#080808", color:"#f4f3f5"}}>  <TbShip/> BATTLESHIP  <TbShip/> </h1>

       
       
      

    
      
       
        
       
      </div>
      {selectRenderMode(gameScene.mode)}
      < Footer />
    </div>
  );
}

export default App;
