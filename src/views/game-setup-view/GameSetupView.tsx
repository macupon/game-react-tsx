import './GameSetupView.css';
import PlayersList from "../../components/PlayersList/PlayersList";
import { Level } from '../../components/Level/Level';

export default function GameSetupView() {
  return (
    <div>
      <header className="header-div">
        <h1>WELCOME</h1>
      </header>
      <div>
        <h2>Players:</h2>
      </div>
      <div className="level-div">
        <Level level={1}/>
        <Level level={2}/>
        <Level level={3}/>
      </div>
      <div className="cards-list-div">
        <PlayersList />
      </div>
    </div>
  );
}
