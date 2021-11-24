import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

const GameContext = React.createContext(
    {
        player1Shots: ["LOL"],
        player2Shots: [],
        player1ShipsSunk: [],
        player2ShipsSunk: [],
        winner: "n/a"
                        }
);

export const GameContextProvider = (props) => {
    const grid_player_1 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_1);
    const grid_player_2 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_2);
    const [player, setPlayer] = useState(1)
    const [previousPlayer, setPreviousPlayer] = useState(2)
    const [player1Shots, setplayer1Shots] = useState([])
    const [player1ShipsSunk, setplayer1ShipsSunk] = useState([])
    const [player2ShipsSunk, setplayer2ShipsSunk] = useState([])
    const [player2Shots, setplayer2Shots] = useState([])

    const ship_dictionary = {
        0: "L-shaped block",
        1: "square-shaped block",
        2: "1st line block",
        3: "2nd line block"
}

    const addToPlayer1Sunk = (shipsunk) => {
        const current = [...player1ShipsSunk]
        current.push(shipsunk)
        setplayer1ShipsSunk(current)
    }


    const addToPlayer2Sunk = (shipsunk) => {
        const current = [...player2ShipsSunk]
        current.push(shipsunk)
        setplayer2ShipsSunk(current)
    }

    const checkships1 = () => {
        for (let i=0; i < grid_player_2.length; i++) {
            const block = grid_player_2[i]
            let counter = 0
            for (let j = 0; j < block.length; j++) {

                if(player1Shots.includes(block[j].toString())) {
                    counter += 1
                }
            }
            if (counter === block.length && !player1ShipsSunk.includes(i)) {
                addToPlayer1Sunk(i)
                window.alert(`Update: You sunk the ${ship_dictionary[i]}!`)
            }

        }

    }

    const checkships2 = () => {
        for (let i=0; i < grid_player_1.length; i++) {
            const block = grid_player_1[i]
            let counter = 0
            for (let j = 0; j < block.length; j++) {

                if(player2Shots.includes(block[j].toString())) {
                    counter += 1
                }
            }
            if (counter === block.length && !player2ShipsSunk.includes(i)) {
                addToPlayer2Sunk(i)
                window.alert(`Update: You sunk the ${ship_dictionary[i]}!`)
            }

        }

    }

    const addToPlayer1Shots = (index) => {
        if (player === 2) {
            window.alert("It is player 2's turn")
            return
        }
        const current = [...player1Shots]
        current.push(index)
        setplayer1Shots(current)
        setPreviousPlayer(1)
        setPlayer(2)
        // checkships1()

    }
//     const ship_dictionary = {
//         0: "L-shaped block",
//         1: "square-shaped block",
//         2: "1st line block",
//         3: "2nd line block"
// }

    const addToPlayer2Shots = (index) => {
        if (player === 1) {
            window.alert("It is player 1's turn")
            return
        }
        const current = [...player2Shots]
        current.push(index)
        setplayer2Shots(current)
        setPreviousPlayer(2)
        setPlayer(1)
    }



    const [winner, setWinner] = useState("n/a")

    const checkwinner1 = () => {
        let counter = 0
        for(let i = 0; i < grid_player_2.length; i++) {
            const block = grid_player_2[i]
            for(let j = 0; j < block.length; j++) {
                if(player1Shots.includes(block[j].toString())) {
                    counter += 1
                }
            }

        }
        if (counter === 16) {
            return true
        } else {
            return false
        }

    }

    const checkwinner2 = () => {
        let counter = 0
        for(let i = 0; i < grid_player_1.length; i++) {
            const block = grid_player_1[i]
            for(let j = 0; j < block.length; j++) {
                if(player2Shots.includes(block[j].toString())) {
                    counter += 1
                }
            }

        }
        if (counter === 16) {
            return true
        } else {
            return false
        }

    }

    return(
    <GameContext.Provider
        value={{
            player1Shots: player1Shots,
            addToPlayer1Shots: addToPlayer1Shots,
            player2Shots: player2Shots,
            addToPlayer2Shots: addToPlayer2Shots,
            player1ShipsSunk: player1ShipsSunk,
            addToPlayer1Sunk: addToPlayer1Sunk,
            player2ShipsSunk: player2ShipsSunk,
            addToPlayer2Sunk: addToPlayer2Sunk,
            winner: winner,
            setWinner: setWinner,
            player: player,
            setPlayer: setPlayer,
            previousPlayer: previousPlayer,
            setPreviousPlayer, setPreviousPlayer,
            grid_player_2: grid_player_2,
            checkships1: checkships1,
            checkships2: checkships2,
            checkwinner2: checkwinner2,
            checkwinner1: checkwinner1









        }}
    >
        {props.children}
    </GameContext.Provider>

    )
    }


export default GameContext;
