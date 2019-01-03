#!/usr/bin/env python3
from flask import Flask, render_template, Response, stream_with_context, request

from zip_generator import zip_generator

app = Flask(__name__)


@app.route('/')
def root():
	return render_template('angular-ui.html')


@app.route('/generate', methods=['POST'])
def generate():
	request_json = request.json or request.form['json']
	# validate request_json

	generator = stream_with_context(zip_generator(request_json))
	response = Response(generator)
	response.headers['Content-Type'] = 'application/zip'
	response.headers['Content-Disposition'] = 'attachment; filename=lala.zip'
	return response
