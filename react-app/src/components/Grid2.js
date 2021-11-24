import React, { useEffect, useState, Component } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { newGameThunk } from '../store/grid_store';
import Cell2 from './Cell2';
import classes from './Grid2.module.css'

function Grid2(props) {
    const shipindexes = {} // {3: 1, 56: 4}
    const allCells = {}

    const colors = {"noinfo": "white", "sea": "aqua", "boat": "red"}

    for (let i = 0; i < props.ships.length; i++) {
        const block = props.ships[i]
        for (let j = 0; j < block.length; j++) {
            shipindexes[block[j]] = i+1
        }
    }

    for (let i = 0; i < 64; i++) {
        if (i in shipindexes){
            allCells[i] = shipindexes[i]
        } else {
            allCells[i] = 0
        }

    }

    // const clickedOnGrid = (index) => {
    //     if (allCells[index] !== 0) {
    //     }
    //     return
    // }


    const arrayOfShipIndexes = Object.keys(shipindexes)


    const gridJSX = (Object.entries(allCells).map(([key, value]) => {
        return (
        <Cell2
        key={key}
        index={key}
        value={value}
        color={colors}
        shipindexes = {shipindexes}
        allCells = {allCells}
        />)
    }))

    return(
        <>

        {/* {arrayOfShipIndexes.map(index => {
            return <div>{index}</div>
        })} */}
        <div className={classes.table}>
            {gridJSX}
        </div>
        </>
    )
}

export default Grid2
