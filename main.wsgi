import os.path
import sys

sys.path.insert(0, os.path.dirname(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../env/lib/python3.5/site-packages'))

# noinspection PyUnresolvedReferences
from main import app as application
