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
			for file in generate_plugin_boilerplate(plugin_info):
				zip_info = ZipInfo(
					rootdir + '/' + file[0],
					date_time=time.localtime(time.time())[:6])

				if len(file) > 2 and file[2]:
					zip_info.external_attr = 0o700 << 16  # executable

				zipfile.writestr(zip_info, file[1])
				yield from stream_file.stream()

		yield from stream_file.stream()
