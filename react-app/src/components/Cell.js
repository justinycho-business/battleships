import React, { useEffect, useState, Component } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { newGameThunk } from '../store/grid_store';
import classes from './Cell.module.css'

function Cell(props) {
    const [color, setColor] = useState(props.color["noinfo"])

    const clickedOnGrid = (index) => {
        if (props.allCells[index] !== 0) {
            setColor(props.color["boat"])
        } else {
            setColor(props.color["sea"])
        }



    }


    return (
        <div
        className={classes.cell}
        style={{backgroundColor: color}}
        onClick={() => {clickedOnGrid(props.index)}}
        >
            <div>
            {props.index}
            </div>
            <div>
            {props.value}
            </div>
        </div>
    )
}

export default Cell
