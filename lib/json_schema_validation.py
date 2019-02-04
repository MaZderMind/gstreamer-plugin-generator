import json
import os.path
import textwrap
import urllib.parse

from jsonschema import ValidationError
from jsonschema.validators import validator_for

json_schema_file = os.path.join(os.path.dirname(__file__), '../schema/schema.json')
with open(json_schema_file) as fp:
	plugin_schema = json.load(fp)

cls = validator_for(plugin_schema)
cls.check_schema(plugin_schema)
validator = cls(plugin_schema)


class JsonValidationError(Exception):
	def __init__(self, original_json, validation_error):
		self.original_json = original_json
		self.validation_error = validation_error

		self.report_issue_url = self.build_report_issue_url()

	def build_report_issue_url(self):
		return \
			"https://github.com/MaZderMind/gstreamer-plugin-generator/issues/new?" + \
			"title={title}&labels=json-validation-error&body={body}".format(
				title=urllib.parse.quote(self.build_issue_title()),
				body=urllib.parse.quote(self.build_issue_body()),
			)

	def build_issue_title(self):
		return "JSON Validation-Problem"

	def build_issue_body(self):
		return textwrap.dedent("""
		## Steps to reproduce the Problem
		Describe the exact steps required to generate this error.
		
		## Validation error
		```
		{error}
		```
		
		## Internal representation
		```
		{json}
		```
		""".rstrip()).format(
			error=str(self.validation_error),
			json=json.dumps(self.original_json, indent='  ')
		)


def validate(json):
	try:
		validator.validate(json)
	except ValidationError as e:
		raise JsonValidationError(json, e)
