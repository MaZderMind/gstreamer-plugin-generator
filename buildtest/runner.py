import io
import logging
import os
import subprocess
from tempfile import TemporaryDirectory
from zipfile import ZipFile

from lib import plugin_zip_generator
from lib.string_utils import all_lower_case, pascal_case

TEMP_DIR_PREFIX = "gstreamer-plugin-generator"


def run_build_test(plugin_info, keep_directories=False):
	if keep_directories:
		temp_dir = TemporaryDirectory(prefix=TEMP_DIR_PREFIX).name
		run_in_temp_dir(temp_dir, plugin_info)
	else:
		with TemporaryDirectory(prefix=TEMP_DIR_PREFIX) as temp_dir:
			run_in_temp_dir(temp_dir, plugin_info)


def run_in_temp_dir(temp_dir, plugin_info):
	logging.debug("generating zip")
	zip_bytes = bytearray()
	for chunk in plugin_zip_generator.plugin_zip_generator(plugin_info):
		zip_bytes.extend(chunk)

	logging.debug("generated %u bytes of zip", len(zip_bytes))

	logging.debug("working in temp_dir %s", temp_dir)
	logging.debug("opening zip")
	with ZipFile(io.BytesIO(zip_bytes), 'r') as zip_file:
		logging.debug("detected %u files in zip", len(zip_file.filelist))

		logging.debug("testing zip")
		zip_file.testzip()

		logging.debug("extractimg zip")
		zip_file.extractall(path=temp_dir)

		plugin_dir = os.path.join(temp_dir, pascal_case(plugin_info['name']))
		logging.debug("working in plugin_dir %s", plugin_dir)

		logging.debug("running autogen.sh")
		subprocess.check_call(['sh', 'autogen.sh'], cwd=plugin_dir)

		logging.debug("running make")
		subprocess.check_call(['make'], cwd=plugin_dir)

		for element in plugin_info['elements']:
			element_identitfier = all_lower_case(element['name'])
			logging.debug("inspecting element '%s' (%s)", element['name'], element_identitfier)

			proc = subprocess.run(
				['bash', './test-scripts/inspect-%s.sh' % element_identitfier],
				cwd=plugin_dir, check=True, stderr=subprocess.PIPE, stdout=subprocess.PIPE)

			logging.debug("inspection:\n%s", proc.stdout.decode('utf-8'))

			if len(proc.stderr) > 0:
				logging.error("inspect returned output on stderr:\n%s", proc.stderr.decode('utf-8'))
				raise AssertionError()

		logging.debug("done")
