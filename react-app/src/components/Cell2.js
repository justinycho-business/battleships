import React, { useEffect, useState, Component, useContext } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { newGameThunk } from '../store/grid_store';
import classes from './Cell2.module.css'
import GameContext from '../store/GameContext';

function Cell2(props) {
    const ctx = useContext(GameContext)
    const [color, setColor] = useState(props.color["info"])


    // {
    //     "player1Shots": [],
    //     "player2Shots": [],
    //     "player1ShipsSunk": [],
    //     "player2ShipsSunk": [],
    //     "winner": "n/a"
    //                     }


    if (ctx.player1Shots.includes(props.index)) {
        return (
            <div
        className={classes.cell}>
            <>
            {
            props.value === 0 && <div className={classes.sea}></div>
            }

            {
            props.value === 1 && <div className={classes.hit}>L</div>
            }

            {
            props.value === 2 && <div className={classes.hit}>S</div>
            }
            {
            props.value === 3 && <div className={classes.hit}>l1</div>
            }
            {
            props.value === 4 && <div className={classes.hit}>l2</div>
            }
            </>
        </div>
        )
    }
    else{
        return (
            <div
        className={classes.cell}
        // onClick={() => {clickedOnGrid(props.index)}}
        >
            <>
            {
            props.value === 0 && <div></div>
            }

            {
            props.value === 1 && <div className={classes.l_block}>L</div>
            }

            {
            props.value === 2 && <div className={classes.square_block}>S</div>
            }
            {
            props.value === 3 && <div className={classes.three_block}>l1</div>
            }
            {
            props.value === 4 && <div className={classes.four_block}>l2</div>
            }
            </>
        </div>
        )
    }}



export default Cell2
