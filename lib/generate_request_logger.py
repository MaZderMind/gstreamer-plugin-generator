import datetime
import json
import os

from lib.string_utils import pascal_case

PLUGIN_REQUESTS_LOG_DIR = 'PLUGIN_REQUESTS_LOG_DIR'


def log_generate_request(request, plugin_info):
	if PLUGIN_REQUESTS_LOG_DIR in request.environ:
		log_dir = request.environ[PLUGIN_REQUESTS_LOG_DIR]
		logfile_name = str(datetime.datetime.utcnow()) + '-' + pascal_case(plugin_info['name']) + '.json'
		with open(os.path.join(log_dir, logfile_name), 'w') as f:
			f.write(json.dumps(plugin_info, indent='\t'))
