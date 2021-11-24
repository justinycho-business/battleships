import React, { useEffect, useState, Component, useContext } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { newGameThunk } from '../store/grid_store';
import Grid from './Grid';
import Player1Screen from './Player1_screen';
import Player2Screen from './Player2screen';
import classes from './Playboard.module.css';
import GameContext from '../store/GameContext';

function Playboard() {
    const ctx = useContext(GameContext)
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state?.session?.user);
    const grid = useSelector(state => state?.grid?.ship_placements);
    const grid_player_1 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_1);
    const grid_player_2 = useSelector(state => state?.grid?.ship_placements?.array_of_arrays_ship_indexs_player_2);


    const [player, setPlayer] = useState(1)
    const [previousPlayer, setPreviousPlayer] = useState(2)
    const [showingplayer1, setShowingPlayer1] = useState(false)
    const [showingplayer2, setShowingPlayer2] = useState(false)

    const showPlayer2board = () => {
        const currentshowing = showingplayer2
        if (showingplayer1) {
            window.alert("close player 1's board before your turn")
        } else {
            setShowingPlayer2(!currentshowing)
            ctx.checkships2()

            if (ctx.checkwinner2()) {
                ctx.setWinner("Player 2")
            }
        }
    }

    const showPlayer1board = () => {
        const currentshowing = showingplayer1
        if (showingplayer2) {
            window.alert("close player 2's board before your turn")
        } else {
            setShowingPlayer1(!currentshowing)
            ctx.checkships1()

            if (ctx.checkwinner1()) {
                ctx.setWinner("Player 1")
            }
        }
    }

    const [player1Shots, setplayer1Shots] = useState([])

    const addToPlayer1Shots = (index) => {
        const current = [...player1Shots]
        current.push(index)
        setplayer1Shots(current)
    }

    const [player2Shots, setplayer2Shots] = useState([])

    const addToPlayer2Shots = (index) => {
        const current = [...player2Shots]
        current.push(index)
        setplayer2Shots(current)
    }

    const [player1ShipsSunk, setplayer1ShipsSunk] = useState([])

    const addToPlayer1Sunk = (shipsunk) => {
        const current = [...player1ShipsSunk]
        current.push(shipsunk)
        setplayer1ShipsSunk(current)
    }

    const [player2ShipsSunk, setplayer2ShipsSunk] = useState([])

    const addToPlayer2Sunk = (shipsunk) => {
        const current = [...player2ShipsSunk]
        current.push(shipsunk)
        setplayer2ShipsSunk(current)
    }

    const [winner, setWinner] = useState("n/a")


    const switchPlayer = () => {
        const current = player
        if (current === 1) {
            setPlayer(2)
        } else {
            setPlayer(1)
        }
    }

    const winnerreset = () => {
        history.push('/play')
        window.location.reload(true)

    }

    if(ctx.winner !== "n/a") {
        return (
            <div className={classes.outmermostcontainer}>
                <div className={classes.label}>Winner is {ctx.winner}</div>
                <div className={classes.label}>Total Shots Fired: {ctx.player1Shots.length + ctx.player2Shots.length}</div>
                <div className={classes.label}>Total Ships Sunk: {ctx.player1ShipsSunk.length + ctx.player2ShipsSunk.length}</div>
                <button
            className={classes.button}
            onClick={winnerreset}
            >Reset Game</button>
            </div>

        )
    }

    return(
        <div className={classes.outmermostcontainer}>
            <div className={classes.label}>Board</div>
            <div className={classes.buttoncontainer}>
                <button
                className={classes.button}
                onClick={showPlayer1board}
                >Show/Hide Player 1 Board</button>
                <button
                className={classes.button}
                onClick={showPlayer2board}
                >Show/Hide Player 2 Board</button>
            </div>
                {ctx.player === 1 &&
                <div className={classes.turn}>
                    Player 1's Turn
                </div>}
                {ctx.player === 2 &&
                <div className={classes.turn}>
                    Player 2's Turn
                </div>}
            {showingplayer1 &&
                grid_player_1 && grid_player_1.length > 0 &&
                grid_player_2 && grid_player_2.length > 0 &&
            <Player1Screen
                grid_player_1={grid_player_1}
                grid_player_2={grid_player_2}
                player={player}
                previousPlayer={previousPlayer}
                addToPlayerShots={addToPlayer1Shots}
                player1Shots={player1Shots}
                showingplayer1={showingplayer1}


            />}

            {showingplayer2 &&
                grid_player_1 && grid_player_1.length > 0 &&
                grid_player_2 && grid_player_2.length > 0 &&
            <Player2Screen
                grid_player_1={grid_player_1}
                grid_player_2={grid_player_2}
                player={player}
                previousPlayer={previousPlayer}
                addToPlayerShots={addToPlayer1Shots}
                player1Shots={player1Shots}


            />}

            <button
            className={classes.button}
            onClick={winnerreset}
            >Reset Game</button>
            </div>

    )
}

export default Playboard
