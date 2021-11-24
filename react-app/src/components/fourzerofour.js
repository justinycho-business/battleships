import React from 'react';
import {useHistory } from 'react-router-dom';
import classes from './Four.module.css'

function FourZeroFour() {
    const history = useHistory()

    history.push('/play')

    return (
        <div className={classes.header}>
            <h1>404 Error, this page does not exist!</h1>
            <h2>Message from Justin the Developer</h2>
        </div>

    )
}

export default FourZeroFour
