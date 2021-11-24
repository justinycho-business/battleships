import React, { useEffect, useState, Component } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Grid2 from './Grid2';
import AnonGrid2 from "./AnonGrid2";
import classes from "./Player1_screen.module.css";

function Player2Screen(props) {
    return (
                <div className={classes.playingboard}>
                    <div className={classes.outercontainer}>
                        <div className={classes.label}>Player 1 Ships</div>

                            <AnonGrid2
                            ships={props.grid_player_1}
                            player= {props.player}
                            previousPlayer={props.previousPlayer}
                            />
                    </div>


                    <div className={classes.outercontainerlast}>
                        <div className={classes.label}>Player 2 Ships</div>
                            <Grid2
                            ships={props.grid_player_2}
                            player= {props.player}
                            previousPlayer={props.previousPlayer}

                            />
                        </div>
                </div>)

            }

export default Player2Screen
