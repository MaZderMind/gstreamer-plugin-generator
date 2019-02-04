import os.path
import sys


def add_path(path):
	if path not in sys.path:
		sys.path.insert(0, path)


add_path(os.path.dirname(__file__))
add_path(os.path.join(os.path.dirname(__file__), '../env/lib/python3.5/site-packages'))

# noinspection PyUnresolvedReferences
from main import app as application
