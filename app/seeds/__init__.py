from flask.cli import AppGroup
from .users import seed_users, undo_users
from .grid import seed_grids, undo_grids
from .pieces import seed_pieces, undo_pieces

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_grids()
    seed_pieces()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_grids()
    undo_pieces()
    # Add other undo functions here
