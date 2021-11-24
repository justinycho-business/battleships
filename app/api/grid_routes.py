from flask import Blueprint, json, jsonify, request
from app.models import User, db, Pieces, Grid
from flask_login import login_required
from sqlalchemy.sql import func
from sqlalchemy import and_, or_, not_
from .random_positions import get_random_positions_for_blocks
import os
import math
import random


grid_routes = Blueprint('grid', __name__)


@grid_routes.route("/newgame")
def newgame():

    block_indexes = []
    block_indexes_player2 = []

    # b/c I used indexes and not a matrix, I need to do this (ships might be 7,8 or 15,16)
    overlap = True
    while overlap:
        overlap = False
        current_random_positions = get_random_positions_for_blocks()

        block_indexes.append(current_random_positions[:4])
        block_indexes.append(current_random_positions[4:8])
        block_indexes.append(current_random_positions[8:12])
        block_indexes.append(current_random_positions[12:])

        for i in block_indexes:
            if (7 in i) and (8 in i):
                overlap = True
            elif (15 in i) and (16 in i):
                overlap = True
            elif (23 in i) and (24 in i):
                overlap = True
            elif (31 in i) and (32 in i):
                overlap = True
            elif (39 in i) and (40 in i):
                overlap = True
            elif (47 in i) and (48 in i):
                overlap = True
            elif (55 in i) and (56 in i):
                overlap = True

        if overlap == True:
            block_indexes = []

    overlap2 = True
    while overlap2:
        overlap2 = False
        current_random_positions2 = get_random_positions_for_blocks()

        block_indexes_player2.append(current_random_positions2[:4])
        block_indexes_player2.append(current_random_positions2[4:8])
        block_indexes_player2.append(current_random_positions2[8:12])
        block_indexes_player2.append(current_random_positions2[12:])

        for i in block_indexes_player2:
            if (7 in i) and (8 in i):
                overlap2 = True
            elif (15 in i) and (16 in i):
                overlap2 = True
            elif (23 in i) and (24 in i):
                overlap2 = True
            elif (31 in i) and (32 in i):
                overlap2 = True
            elif (39 in i) and (40 in i):
                overlap2 = True
            elif (47 in i) and (48 in i):
                overlap2 = True
            elif (55 in i) and (56 in i):
                overlap2 = True

        if overlap2 == True:
            block_indexes_player2 = []

    allsquares1 = Grid.query.filter_by(player_id=1).all()
    allsquares2 = Grid.query.filter_by(player_id=2).all()

    print("83:", block_indexes)
    print("84: ", block_indexes_player2)

    # player_1_squares = [square.to_dict() for square in allsquares1]
    # player_2_squares = [square.to_dict() for square in allsquares2]

    # for sq in player_1_squares:
    #     print(sq)
    #     grid_to_change = Grid.query.get(sq['id'])
    #     for block in range(len(block_indexes)):
    #         for i in block_indexes[block]:
    #             if i == sq['index']:
    #                 grid_to_change.occupant = block+1
    #                 db.session.add()
    #             else:
    #                 grid_to_change.occupant = 0
    #                 db.session.add()

    #     grid_to_change.status = 0
    #     db.session.commit()

    # for sq_two in player_2_squares:
    #     print(sq_two)
    #     grid_to_change2 = Grid.query.get(sq_two['id'])
    #     for block in range(len(block_indexes_player2)):
    #         for i in block_indexes_player2[block]:
    #             if i == sq_two['index']:
    #                 grid_to_change2.occupant = block+1
    #                 db.session.commit()
    #             else:
    #                 grid_to_change2.occupant = 0
    #                 db.session.commit()
    #     grid_to_change2.status = 0
    #     db.session.commit()

    return {
        'array_of_arrays_ship_indexs_player_1': block_indexes,
        'array_of_arrays_ship_indexs_player_2': block_indexes_player2,
    }
