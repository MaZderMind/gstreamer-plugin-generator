import unittest

from io import BytesIO
from zipfile import ZipFile

from buildtest.builder import build_plugin_config
from lib.plugin_zip_generator import plugin_zip_generator


class TestPluginZipGenerator(unittest.TestCase):
	def test_generates_valid_zip_file(self):
		zipdata = BytesIO()
		zip_generator = plugin_zip_generator(build_plugin_config())
		for zipdata_part in zip_generator:
			zipdata.write(zipdata_part)

		self.assertGreater(len(zipdata.getvalue()), 0)

		parsed_zip = ZipFile(zipdata, 'r')
		self.assertIsNone(parsed_zip.testzip())
		self.assertGreater(len(parsed_zip.infolist()), 0)

		for info in parsed_zip.infolist():
			octal_perms = '%o' % (info.external_attr >> 16)
			self.assertIn(octal_perms, ['660', '770'])
