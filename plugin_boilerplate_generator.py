from datetime import datetime

from flask import render_template


def generate_plugin_boilerplate(plugin_info):
	context = {
		'now': datetime.now(),
		'plugin': plugin_info,
		'generator': 'https://gstreamer-plugin-generator.mazdermind.de/',
	}

	yield 'README', render_template('boilerplate/README.j2', **context)
	yield 'AUTHORS', render_template('boilerplate/AUTHORS.j2', **context)
	yield 'ChangeLog', render_template('boilerplate/ChangeLog.j2', **context)

	yield 'Makefile.am', render_template('boilerplate/Makefile.am.j2', **context)
	yield 'configure.ac', render_template('boilerplate/configure.ac.j2', **context)
	yield 'autogen.sh', render_template('boilerplate/autogen.sh.j2', **context), True

	yield '.gitmodules', render_template('boilerplate/gitmodules.j2', **context)
	yield '.gitignore', render_template('boilerplate/gitignore.j2', **context)

	if plugin_info['license'] == 'LGPL':
		yield 'COPYING', render_template('boilerplate/licenses/LGPL.j2', **context)
