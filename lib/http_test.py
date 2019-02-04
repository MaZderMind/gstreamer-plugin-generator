import json
import unittest

from buildtest.builder import build_plugin_config
from main import app

app.config['TESTING'] = True
test_client = app.test_client()


class TestPluginZipGenerator(unittest.TestCase):
	def test_root(self):
		response = test_client.get('/')
		self.assertEqual(response.headers['Content-Type'], 'text/html; charset=utf-8')
		self.assertGreater(int(response.headers['Content-Length']), 0)
		self.assertEqual(len(response.data), int(response.headers['Content-Length']))

	def test_generate_json_post(self):
		response = test_client.post('/generate', json=build_plugin_config())
		self.assertEqual(response.headers['Content-Type'], 'application/zip')
		self.assertEqual(response.headers['Content-Disposition'], 'attachment; filename=AwsomePlugin.zip')
		self.assertGreater(len(response.data), 0)

	def test_generate_json_arg(self):
		response = test_client.post('/generate', data={'json': json.dumps(build_plugin_config())})
		self.assertEqual(response.headers['Content-Type'], 'application/zip')
		self.assertEqual(response.headers['Content-Disposition'], 'attachment; filename=AwsomePlugin.zip')
		self.assertGreater(len(response.data), 0)

	def test_rejects_incorrect_json(self):
		response = test_client.post('/generate', data={'json': json.dumps({"name": "Incomplete"})})
		self.assertEqual(response.headers['Content-Type'], 'text/html; charset=utf-8')
		self.assertEqual(response.status, '400 BAD REQUEST')

	def test_incorrect_json_shows_expected_error_page(self):
		response = test_client.post('/generate', data={'json': json.dumps({"name": "Incomplete"})})
		body = bytes(response.data).decode('utf-8')

		self.assertIn('https://github.com/MaZderMind/gstreamer-plugin-generator/issues/new', body)
		self.assertIn('&#39;description&#39; is a required property', body)
		self.assertIn('"name": "Incomplete"', body)
