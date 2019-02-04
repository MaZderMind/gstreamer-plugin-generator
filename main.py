#!/usr/bin/env python3
import json
import re

from flask import Flask, render_template, Response, stream_with_context, request

from lib.json_schema_validation import validate, JsonValidationError
from lib.plugin_zip_generator import plugin_zip_generator
from lib.string_utils import pascal_case

app = Flask(__name__)


@app.route('/')
def root():
	return render_template('angular-ui.html')


@app.route('/generate', methods=['POST'])
def generate():
	plugin_info = request.json or json.loads(request.form['json'])
	validate(plugin_info)

	filename = re.sub(r'/[^a-zA-Z0-9]/g', '', pascal_case(plugin_info['name'])) + ".zip"

	generator = stream_with_context(plugin_zip_generator(plugin_info))
	response = Response(generator)
	response.headers['Content-Type'] = 'application/zip'
	response.headers['Content-Disposition'] = 'attachment; filename=' + filename
	return response


@app.errorhandler(JsonValidationError)
def validation_error(jsonValidationError):
	return render_template(
		'error/jsonschema.html',
		json=jsonValidationError.original_json,
		error=str(jsonValidationError.validation_error),
		report_issue_url=jsonValidationError.report_issue_url), 400
