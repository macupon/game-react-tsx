import { useContext, useEffect } from "react";
import "./PlayersList.css";
// import {makeNewPlayer} from '../../utils/players.js';
import players

import PlayerCard from "../PlayerCard/PlayerCard";
import { PlayersContext } from "../../contexts/PlayersContext";
import { player } from "../../types";

export default function PlayersList() {
  const { playersArray, addPlayer, updateNumPontentialMatches} = useContext(PlayersContext);

  useEffect(() => {
    console.log(playersArray)
    // updateNumPontentialMatches()
  }, [playersArray])

  // useEffect(() => {
  //   updateNumPontentialMatches()
  // }, [])

  return (
    <div>
      <button id="btn-addPlayer" onClick={() => addPlayer()}>
        Add Player
      </button>

      <div className="playerList-div">
        {playersArray.map((player:player) => (
          <PlayerCard key={player.id} player={player}/>
        ))}
      </div>
      
    </div>
  );
}
