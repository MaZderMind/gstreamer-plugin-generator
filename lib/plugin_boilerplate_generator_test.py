import unittest

from buildtest.builder import build_plugin_config, build_element_config
from lib.plugin_boilerplate_generator import generate_plugin_boilerplate


class PluginBoilerplateGenerator(unittest.TestCase):
	def test_readme_formatting_one_element(self):
		generator = generate_plugin_boilerplate(build_plugin_config(
			elements=[build_element_config(name="Foo", description="Does foo things.")]
		))
		readme_content = self.select_file_from_generator('README', generator)

		self.assertIn(
			"\n"
			"Foo\n"
			"---\n"
			"Does foo things.\n"
			"\n",
			readme_content)

	def test_readme_formatting_two_element(self):
		generator = generate_plugin_boilerplate(build_plugin_config(
			elements=[
				build_element_config(name="Foo", description="Does foo things."),
				build_element_config(name="Bar", description="Does bar things.")
			]
		))
		readme_content = self.select_file_from_generator('README', generator)

		self.assertIn(
			"\n"
			"Foo\n"
			"---\n"
			"Does foo things.\n"
			"\n"
			"Bar\n"
			"---\n"
			"Does bar things.\n"
			"\n",
			readme_content)

	def select_file_from_generator(self, search_filename, generator):
		for filename, content in generator:
			if filename == search_filename:
				return content

		return None
