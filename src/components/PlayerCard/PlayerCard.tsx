import React, { useContext } from 'react'
import './PlayerCard.css';
import IntoHave from '../IntoHave/IntoHave';
import { PlayersContext } from '../../contexts/PlayersContext';
import Emoji from '../Emoji/Emoji';

export default function PlayeCard(propsObj) {
  const {player} = propsObj;


  const {updatePlayerName, removePlayerBtn} = useContext(PlayersContext);

  return (
    <div className='div-card'>
      <div>
        <Emoji emoji={player.emoji}/>
      </div>
      <input
        className='inputName'
        type='text'
        id={`inputName${player.id}`}
        placeholder={`Player ${player.id}`}
        maxlength="15"
        onBlur={(event) => updatePlayerName(player.id, event.target.value)}>
      </input>
      <p className='haveInto-text'>
        I have: 
      </p>
      <div>
        <IntoHave player={player} prop2change={'has'}/>
      </div>
      <p className='haveInto-text'>
        I am into: 
      </p>
      <div>
        <IntoHave player={player} prop2change={'into'}/>
      </div>
      <button
        className='btnRemove'
        id={`btnRemove${player.id}`}
        onClick={()=> removePlayerBtn(player.id)}>Remove Player
      </button>
      <div id={`numPotentialMatches-${player.id}`}>
        Interacts with: {player.numPotentialMatches}
      </div>
    </div>
  )
}
