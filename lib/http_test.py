import json
import unittest

from lib.test_plugin_info import test_plugin_info
from main import app

app.config['TESTING'] = True
test_client = app.test_client()


class TestPluginZipGenerator(unittest.TestCase):
	def test_root(self):
		response = test_client.get('/')
		data = response.data
		self.assertEqual(response.headers['Content-Type'], 'text/html; charset=utf-8')
		self.assertGreater(int(response.headers['Content-Length']), 0)
		self.assertEqual(len(data), int(response.headers['Content-Length']))

	def test_generate_json_post(self):
		response = test_client.post('/generate', json=test_plugin_info)
		data = response.data
		self.assertEqual(response.headers['Content-Type'], 'application/zip')
		self.assertEqual(response.headers['Content-Disposition'], 'attachment; filename=Ebur128LoudnessMeter.zip')
		self.assertGreater(len(data), 0)

	def test_generate_json_arg(self):
		response = test_client.post('/generate', data={'json': json.dumps(test_plugin_info)})
		data = response.data
		self.assertEqual(response.headers['Content-Type'], 'application/zip')
		self.assertEqual(response.headers['Content-Disposition'], 'attachment; filename=Ebur128LoudnessMeter.zip')
		self.assertGreater(len(data), 0)
