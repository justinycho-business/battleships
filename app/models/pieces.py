from .db import db


class Pieces(db.Model):
    __tablename__ = 'piece'

    id = db.Column(db.INTEGER, primary_key=True)
    player_id = db.Column(db.INTEGER, nullable=False)
    piece = db.Column(db.INTEGER, nullable=False)
    hit = db.Column(db.INTEGER, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'player_id': self.player_id,
            'piece': self.piece,
            'hit': self.hit,
        }
