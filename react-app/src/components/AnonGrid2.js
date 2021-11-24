import React, { useEffect, useState, Component } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';
import { newGameThunk } from '../store/grid_store';
import AnonCell2 from './AnonCell2';
import classes from './AnonGrid2.module.css'

function AnonGrid2(props) {
    const shipindexes = {}
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




    const arrayOfShipIndexes = Object.keys(shipindexes)


    const gridJSX = (Object.entries(allCells).map(([key, value]) => {
        return (
        <AnonCell2
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

export default AnonGrid2
