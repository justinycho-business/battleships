from app.models import db, Pieces

grid_player_dic = {"player1": 1, "player2": 2}

grid_index1 = [0] * 64

grid_index2 = [0] * 64

status_index_dic = {0: "empty", 1: "miss", 2: "hit"}

occupant_dic = {0: "sea", 100: "L-shape",
                110: "block", 120: "1st-line", 130: "2nd-line"}

l_shape = [101, 102, 103, 104]
block = [111, 112, 113, 114]
line_1 = [121, 122, 123, 124]
line_2 = [131, 132, 133, 134]


def seed_pieces():

    for i in l_shape:

        seed1 = Pieces(
            player_id=int(1),
            piece=i,
            hit=0
        )
        seed2 = Pieces(
            player_id=int(2),
            piece=i,
            hit=0
        )
        db.session.add(seed1)
        db.session.add(seed2)

    for j in block:

        seed3 = Pieces(
            player_id=int(1),
            piece=j,
            hit=0
        )
        seed4 = Pieces(
            player_id=int(2),
            piece=j,
            hit=0
        )
        db.session.add(seed3)
        db.session.add(seed4)

    for x in line_1:

        seed5 = Pieces(
            player_id=int(1),
            piece=x,
            hit=0
        )
        seed6 = Pieces(
            player_id=int(2),
            piece=x,
            hit=0
        )
        db.session.add(seed5)
        db.session.add(seed6)

    for y in line_2:

        seed7 = Pieces(
            player_id=int(1),
            piece=y,
            hit=0
        )
        seed8 = Pieces(
            player_id=int(2),
            piece=y,
            hit=0
        )
        db.session.add(seed7)
        db.session.add(seed8)

    db.session.commit()


def undo_pieces():
    db.session.execute('TRUNCATE pieces RESTART IDENTITY CASCADE;')
    db.session.commit()
