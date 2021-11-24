from app.models import db, Grid

grid_player_dic = {"player1": 1, "player2": 2}

grid_index1 = [0] * 64

grid_index2 = [0] * 64

status_index_dic = {0: "empty", 1: "miss", 2: "hit"}

occupant_dic = {0: "sea", 100: "L-shape",
                110: "block", 120: "1st-line", 130: "2nd-line"}


def seed_grids():

    for i in range(len(grid_index1)):
        seed1 = Grid(
            player_id=int(1),
            index=int(i),
            occupant=grid_index1[i],
            status=0,
        )
        db.session.add(seed1)

    for j in range(len(grid_index2)):
        seed2 = Grid(
            player_id=int(2),
            index=int(j),
            occupant=grid_index1[i],
            status=0,
        )
        db.session.add(seed2)

    db.session.commit()


def undo_grids():
    db.session.execute('TRUNCATE grids RESTART IDENTITY CASCADE;')
    db.session.commit()
