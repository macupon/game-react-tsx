import {createContext, useState, ReactNode } from "react";
import {randSex, randInterest,getRandomEmoji , assignRandomColor} from '../utils/random';
import {updateNumPontentialMatches} from '../utils/players';
import { player } from "../types";

// 1 Crear el Contexto
// 2 Exportar el Contexto

const startingtArray: player[] = [
    {
        id: 1,
        name: 'Player 1',
        has: 'penis',
        into: 'vagina',
        emoji: '🐶',
        color: 'rgba(255, 77, 77, 1.0)',
        numPotentialMatches: 1,
    },
    {
        id:2,
        name: 'Player 2',
        has: 'vagina',
        into: 'penis',
        emoji: '🐱',
        color: 'rgba(255, 185, 0, 1.0)',
        numPotentialMatches: 1
    }
]

interface PlayersContextProviderProps {
    children: ReactNode;
  }

interface PlayersContextType {
    playersArray: player[];
    setplayersArray: React.Dispatch<React.SetStateAction<player[]>>;
    updatePlayerName: (playerId: number, newName: string) => void;
    removePlayerBtn: (removePlayerId: number) => void;
    addPlayer: () => void;
}

export const PlayersContext = createContext<PlayersContextType | undefined>(undefined)

//3 Crear Funcion para usar el contexto
//4 Podemos definirlo como un hook personalizado
//5 Exporta la FUNCION que almacena el hook useContext

// export const usePlayersContext = () => {return useContext(PlayersContext)}

export const PlayersContextProvider: React.FC<PlayersContextProviderProps> = ({children}) => {
    
    const [playersArray, setplayersArray] = useState<player[]>(startingtArray);


    function addPlayer (): void {
        // Create ID
        const idArray: number[] = [];
        if (playersArray.length < 12){
            playersArray.forEach(player => {
                idArray.push(player.id)
            });
            const idArrayMax = Math.max(...idArray);
            const newId = idArrayMax+1;
            // Make new name
            const newName = `Player ${newId}`;
            // Assign sex to the new player
            const mySex = randSex();
            //  Assign into to the new player
            const into = randInterest();
            // Assign emoji to the new player
            const myEmoji = getRandomEmoji(playersArray);
            //  Assign color to the new player
            const myColor = assignRandomColor(playersArray);
            // 
            const numPotentialMatches = 0;
            
            // Create new player
            const newPlayer: player = {
                id: newId,
                name: newName, 
                has: mySex, 
                into: into, 
                emoji: myEmoji, 
                color: myColor, 
                numPotentialMatches: numPotentialMatches
            }

            // Create new array with the new player
            const newPlayersArray = [...playersArray, newPlayer]

            // update the array with the new potential interactions
            const updatedPlayersArray = updateNumPontentialMatches(newPlayersArray)

            // update useState
            setplayersArray(updatedPlayersArray) //updatePontentialMatches()
            
        } else {
            alert('this is an orgy!');
        }
    }
    
    //Assign a name based on the ID
    function updatePlayerName (playerId: number, newName: string): void {
        const updatedPlayersArray = playersArray.map((player) => {
            if (player.id === playerId) {
              return { ...player, name:newName };
            }
            return player;
          });
          // update useState
          setplayersArray([...updatedPlayersArray]);
    }

    // Remove players leaving al least 2 player
    function removePlayerBtn (removePlayerId: number): void {
        if (playersArray.length > 2) {
            const indexPlayer =  playersArray.findIndex(player => player.id === removePlayerId);
            playersArray.splice(indexPlayer, 1);
            setplayersArray([...playersArray]);
        }
    }




    const contextValue: PlayersContextType = {
        playersArray,
        setplayersArray,
        updatePlayerName,
        removePlayerBtn,
        addPlayer,
        // updateNumPontentialMatches
        // myGender
    };


    
    return (
        <PlayersContext.Provider value={contextValue}>
            {children}
        </PlayersContext.Provider>
    );    
};
