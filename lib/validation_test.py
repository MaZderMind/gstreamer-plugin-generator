import json
import os.path
import unittest

from jsonschema import validate

SCHEMA_JSON = os.path.join(os.path.dirname(__file__), '../schema/schema.json')


class TestValidation(unittest.TestCase):
	def validate(self, json_dict):
		with open(SCHEMA_JSON, 'r') as fp:
			schema_dict = json.load(fp)
			validate(json_dict, schema_dict)

	def test_minimal_json_validates(self):
		self.validate({
			"author": "Test",
			"authorEmail": "Test",
			"description": "",
			"elements": [
				{
					"archetype": "GstBaseTransform",
					"classifications": [],
					"description": "",
					"mediatype": "OTHER",
					"name": "Test",
					"properties": [],
					"signals": []
				}
			],
			"license": "LGPL",
			"name": "Test",
			"url": "Test"
		})

	def test_minimal_json_with_propety_validates(self):
		self.validate({
			"author": "Test",
			"authorEmail": "Test",
			"description": "",
			"elements": [
				{
					"archetype": "GstBaseTransform",
					"classifications": [],
					"description": "",
					"mediatype": "OTHER",
					"name": "Test",
					"properties": [
						{
							"description": "",
							"enumItems": [],
							"name": "Test",
							"type": "STRING"
						}
					],
					"signals": []
				}
			],
			"license": "LGPL",
			"name": "Test",
			"url": "Test"
		})

	def test_full_json_validates(self):
		self.validate({
			"name": "Test",
			"description": "Test",
			"author": "Test",
			"authorEmail": "Test",
			"license": "LGPL",
			"url": "Test",
			"elements": [
				{
					"archetype": "GstBaseTransform",
					"classifications": [
						"Demuxer",
						"Mixer",
						"Control"
					],
					"name": "Test",
					"description": "Test",
					"properties": [
						{
							"name": "Test",
							"description": "Test",
							"enumItems": [],
							"type": "CHAR"
						},
						{
							"name": "Test2",
							"description": "Test2",
							"enumItems": [],
							"type": "STRING"
						},
						{
							"name": "Test3",
							"description": "Test3",
							"enumItems": [
								"Foo",
								"Bar"
							],
							"type": "ENUM"
						}
					],
					"signals": [
						"Test",
						"Test2"
					],
					"mediatype": "OTHER"
				},
				{
					"archetype": "GstBaseTransform",
					"classifications": [
						"Sink",
						"Filter",
						"Effect"
					],
					"name": "Test2",
					"description": "Test2",
					"properties": [],
					"signals": [],
					"mediatype": "OTHER"
				}
			]
		})
