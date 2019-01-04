import time
from zipfile import ZipFile, ZIP_DEFLATED, ZipInfo

from plugin_boilerplate_generator import generate_plugin_boilerplate


class StreamFile(object):
	def __init__(self):
		self.buf = bytearray()

	def __enter__(self):
		return self

	def __exit__(self, exc_type, exc_val, exc_tb):
		if exc_val:
			self._cleanup()
		else:
			self.close()

	def write(self, data):
		self.buf.extend(data)
		return len(data)

	def stream(self):
		yield bytes(self.buf)
		self.buf = bytearray()

	def flush(self):
		pass

	def close(self):
		if len(self.buf) != 0:
			raise RuntimeError("unstreamed data remains in StreamFile")

		self._cleanup()

	def _cleanup(self):
		self.buf = None


def plugin_zip_generator(plugin_info):
	rootdir = plugin_info['identifier']
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