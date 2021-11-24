from .db import db


class Grid(db.Model):
    __tablename__ = 'grid'

    id = db.Column(db.INTEGER, primary_key=True)
    player_id = db.Column(db.INTEGER, nullable=False)
    index = db.Column(db.INTEGER, nullable=False)
    occupant = db.Column(db.INTEGER, nullable=False)
    status = db.Column(db.INTEGER, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'player_id': self.player_id,
            'index': self.index,
            'occupant': self.occupant,
            'status': self.status,
        }
