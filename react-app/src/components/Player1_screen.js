import React, { useEffect, useState, Component } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Grid from './Grid';
import AnonGrid from "./AnonGrid";
import classes from "./Player1_screen.module.css";

function Player1Screen(props) {
    return (
                <div className={classes.playingboard}>
                    <div className={classes.outercontainer}>
                        <div className={classes.label}>Player 1 Ships</div>

                            <Grid
                            ships={props.grid_player_1}
                            player= {props.player}
                            previousPlayer={props.previousPlayer}
                            showingplayer1={props.showingplayer1}
                            />
                    </div>


                    <div className={classes.outercontainerlast}>
                        <div className={classes.label}>Player 2 Ships</div>
                            <AnonGrid
                            ships={props.grid_player_2}
                            player= {props.player}
                            previousPlayer={props.previousPlayer}
                            addToPlayerShots={props.addToPlayerShots}
                            player1Shots={props.player1Shots}
                            showingplayer1={props.showingplayer1}
                            />
                        </div>
                </div>)

            }

export default Player1Screen
