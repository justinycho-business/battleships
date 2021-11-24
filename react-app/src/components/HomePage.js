import React, { useEffect, useState, Component } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { newGameThunk } from '../store/grid_store';
import Grid from './Grid';
import classes from './HomePage.module.css';

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state?.session?.user);
    const grid = useSelector(state => state?.grid?.ship_placements);
    const grid_player_1 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_1);
    const grid_player_2 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_2);

    const [newGameSwitch, setNewGameSwitch] = useState(false)

    const [player, setPlayer] = useState(1)
    const [previousPlayer, setPreviousPlayer] = useState(2)
    // const [player1grid, setPlayer1Grid] = useState({})
    // const [player2grid, setPlayer2Grid] = useState({})

    let gameStats = {
        "player1Shots": [],
        "player2Shots": [],
        "player1ShipsSunk": [],
        "player2ShipsSunk": [],
        "winner": "n/a"
                        }


    const switchPlayer = () => {
        const current = player
        if (current === 1) {
            setPlayer(2)
        } else {
            setPlayer(1)
        }
    }

    const startNewGame = () => {
        const req = dispatch(newGameThunk())
        setPlayer(1)
        gameStats = {
            "player1Shots": [],
            "player2Shots": [],
            "player1ShipsSunk": [],
            "player2ShipsSunk": [],
            "winner": "n/a"
                            }
        const currentgame = newGameSwitch
        history.push('/playboard')



    }

    return (
        <>
            <div className={classes.header}>
                <div className={classes.label}>Lobby</div>
                <button
                className={classes.newgame}
                onClick={startNewGame}
                >Start New Game</button>

            {/* <>
                <div>
                {player === 1 && <div>Player 1 Turn</div>}
                {player === 2 && <div>Player 2 Turn</div>}


                </div>
                <button>Switch Player</button>
                <div className={classes.playingboard}>
                    <div className={classes.outercontainer}>
                        <div>Player 1 Ships</div>
                            {grid_player_1 &&
                            grid_player_1.length > 0 &&
                            <Grid
                            ships={grid_player_1}
                            gameStats = {gameStats}
                            player= {player}
                            />}
                    </div>


                    <div className={classes.outercontainerlast}>
                        <div>Player 2 Ships</div>
                        {grid_player_2 &&
                            grid_player_2.length > 0 &&
                            <Grid
                            ships={grid_player_2}
                            gameStats = {gameStats}
                            player= {player}
                            />}
                        </div>
                </div>
            </> */}





            </div>
        </>
    )
}

export default HomePage
