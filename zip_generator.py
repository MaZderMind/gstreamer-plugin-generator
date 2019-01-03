from zipfile import ZipFile, ZIP_DEFLATED


class StreamFile(object):
	def __init__(self):
		self.buf = bytearray()

	def __enter__(self):
		return self

	def __exit__(self, exc_type, exc_val, exc_tb):
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

		self.buf = None


def zip_generator(request_json):
	with StreamFile() as stream_file:
		with ZipFile(stream_file, "w", ZIP_DEFLATED) as zipfile:
			for i in range(0, 10):
				zipfile.writestr(str(i) + ".txt", "Content of File " + str(i) + "\n" + str(request_json))
				yield from stream_file.stream()

		yield from stream_file.stream()
