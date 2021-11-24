import React, { useEffect, useState, Component, useContext } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { newGameThunk } from '../store/grid_store';
import classes from './AnonCell.module.css';
import GameContext from '../store/GameContext';

function AnonCell(props) {
    const ctx = useContext(GameContext)
    // const [color, setColor] = useState(props.color["info"])



    if (ctx.player1Shots.includes(props.index)) {
        return (

                <>
                {
                props.value === 0 && <div className={classes.sea}></div>
                }

                {
                props.value === 1 && <div className={classes.hit}></div>
                }

                {
                props.value === 2 && <div className={classes.hit}></div>
                }
                {
                props.value === 3 && <div className={classes.hit}></div>
                }
                {
                props.value === 4 && <div className={classes.hit}></div>
                }
                </>

        )
    }


    return (
        <div
        className={classes.cell}
        onClick={() => {ctx.addToPlayer1Shots(props.index)}}
        >
        {/* { hit &&
            <>
            {
            props.value === 0 && <div className={classes.sea}></div>
            }

            {
            props.value === 1 && <div className={classes.hit}></div>
            }

            {
            props.value === 2 && <div className={classes.hit}></div>
            }
            {
            props.value === 3 && <div className={classes.hit}></div>
            }
            {
            props.value === 4 && <div className={classes.hit}></div>
            }
            </>
        } */}

        </div>
    )
}

export default AnonCell
