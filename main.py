#!/usr/bin/env python3
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def root():
	return render_template('angular-ui.html')
