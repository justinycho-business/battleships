import React, { useEffect, useState, Component } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { newGameThunk } from '../store/grid_store';
import Grid from './Grid';
import classes from './HomePage.module.css';

function HomePage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state?.session?.user);
    const grid = useSelector(state => state?.grid?.ship_placements);
    const grid_player_1 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_1);
    const grid_player_2 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_2);

    const [newGameSwitch, setNewGameSwitch] = useState(0)

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


    //if new game was created, populate the grid states with ships
    // useEffect(() => {
    //     if (Object.keys(player1grid).length === 0 &&
    //     Object.keys(player2grid).length === 0
    //          &&
    //         grid_player_1 && grid_player_1.length === 4 &&
    //         grid_player_2 && grid_player_2.length === 4) {
    //             for (let i = 0; i < grid_player_1.length; i++) {
    //                 const block =  grid_player_1[i]
    //                 for (let j = 0; j < block.length; j++) {
    //                     player1grid[block[j]] = i+1
    //                 }
    //             }

    //             for (let i = 0; i < grid_player_2.length; i++) {
    //                 const block =  grid_player_2[i]
    //                 for (let j = 0; j < block.length; j++) {
    //                     player2grid[block[j]] = i+1
    //                 }

    //             }
    //             console.log(player1grid);
    //             console.log(player2grid);

    //         }
    // }, [
    //     newGameSwitch
    // ])
    // if (Object.keys(player1grid).length === 0 &&
    // Object.keys(player2grid).length === 0
    //      &&
    //     grid_player_1 && grid_player_1.length === 4 &&
    //     grid_player_2 && grid_player_2.length === 4) {
    //         for (let i = 0; i < grid_player_1.length; i++) {
    //             const block =  grid_player_1[i]
    //             for (let j = 0; j < block.length; j++) {
    //                 player1grid[block[j]] = i+1
    //             }
    //         }

    //         for (let i = 0; i < grid_player_2.length; i++) {
    //             const block =  grid_player_2[i]
    //             for (let j = 0; j < block.length; j++) {
    //                 player2grid[block[j]] = i+1
    //             }

    //         }
    //         console.log(player1grid);
    //         console.log(player2grid);

    //     }


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
        // player1grid = {}
        // player2grid = {}
        gameStats = {
            "player1Shots": [],
            "player2Shots": [],
            "player1ShipsSunk": [],
            "player2ShipsSunk": [],
            "winner": "n/a"
                            }
        const currentgame = newGameSwitch
        setNewGameSwitch(currentgame+1)

    }

    return (
        <>
            <div className={classes.header}>
                <div>BattleShip HomePage</div>
                <button onClick={startNewGame}>Start New Game</button>

                {player === 1 && <div>Player 1 Turn</div>}
                {player === 2 && <div>Player 2 Turn</div>}

                <div>Player 1 Ships</div>
                    {grid_player_1 &&
                    grid_player_1.length > 0 &&
                    <Grid
                    ships={grid_player_1}
                    gameStats = {gameStats}
                    />}



                <div>Player 2 Ships</div>
                {grid_player_2 &&
                    grid_player_2.length > 0 &&
                    <Grid
                    ships={grid_player_2}
                    gameStats = {gameStats}
                    />}






            </div>
        </>
    )
}

export default HomePage
