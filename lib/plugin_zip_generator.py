import time

from zipfile import ZipFile, ZIP_DEFLATED, ZipInfo

from lib.plugin_boilerplate_generator import generate_plugin_boilerplate
from lib.string_utils import pascal_case


class StreamFile(object):
	def __init__(self):
		self.buf = bytearray()
		self.pos = 0

	def __enter__(self):
		return self

	def __exit__(self, exc_type, exc_val, exc_tb):
		if exc_val:
			self._cleanup()
		else:
			self.close()

	def write(self, data):
		self.buf.extend(data)
		self.pos += len(data)
		return len(data)

	def stream(self):
		yield bytes(self.buf)
		self.buf = bytearray()

	def flush(self):
		pass

	def tell(self):
		return self.pos

	def close(self):
		if len(self.buf) != 0:
			raise RuntimeError("unstreamed data remains in StreamFile")

		self._cleanup()

	def _cleanup(self):
		self.buf = None


def plugin_zip_generator(plugin_info):
	rootdir = pascal_case(plugin_info['name'])
	with StreamFile() as stream_file:
		with ZipFile(stream_file, "w", ZIP_DEFLATED) as zipfile:
			for generator_yield in generate_plugin_boilerplate(plugin_info):
				filename = generator_yield[0]
				zip_info = ZipInfo(
					rootdir + '/' + filename,
					date_time=time.localtime(time.time())[:6])

				file_permissions = 0o770 if should_be_executable(generator_yield) else 0o660
				zip_info.external_attr = file_permissions << 16

				zipfile.writestr(zip_info, generator_yield[1])
				yield from stream_file.stream()

		yield from stream_file.stream()


def should_be_executable(generator_yield):
	return len(generator_yield) > 2 and generator_yield[2]
