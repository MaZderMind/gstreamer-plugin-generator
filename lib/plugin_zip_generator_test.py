import unittest
from io import BytesIO
from zipfile import ZipFile

from lib.plugin_zip_generator import plugin_zip_generator
from lib.test_plugin_info import test_plugin_info


class TestPluginZipGenerator(unittest.TestCase):
	def test_generates_valid_zip_file(self):
		zipdata = BytesIO()
		zip_generator = plugin_zip_generator(test_plugin_info)
		for zipdata_part in zip_generator:
			zipdata.write(zipdata_part)

		self.assertGreater(len(zipdata.getvalue()), 0)

		parsed_zip = ZipFile(zipdata, 'r')
		self.assertIsNone(parsed_zip.testzip())
		self.assertGreater(len(parsed_zip.infolist()), 0)
