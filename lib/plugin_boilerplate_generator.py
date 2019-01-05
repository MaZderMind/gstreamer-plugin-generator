from datetime import datetime

from jinja2 import Environment, FileSystemLoader

from lib.string_utils import all_lower_case, upper_snake_case, pascal_case, quote, escape_quotes

env = Environment(
	loader=FileSystemLoader('templates'),
	keep_trailing_newline=True,
)
env.filters['escape_quotes'] = escape_quotes
env.filters['quote'] = quote
env.filters['all_lower_case'] = all_lower_case
env.filters['upper_snake_case'] = upper_snake_case
env.filters['pascal_case'] = pascal_case


def render(template, context):
	template = env.get_template(template)
	return template.render(**context)


def generate_plugin_boilerplate(plugin_info):
	context = {
		'now': datetime.now(),
		'plugin': plugin_info,
		'generator': 'https://gstreamer-plugin-generator.mazdermind.de/',
	}

	identitfier = all_lower_case(plugin_info['name'])

	yield 'README', render('boilerplate/README.j2', context)
	yield 'AUTHORS', render('boilerplate/AUTHORS.j2', context)
	yield 'NEWS', render('boilerplate/NEWS.j2', context)
	yield 'ChangeLog', render('boilerplate/ChangeLog.j2', context)

	yield 'Makefile.am', render('boilerplate/Makefile.am.j2', context)
	yield 'configure.ac', render('boilerplate/configure.ac.j2', context)
	yield 'autogen.sh', render('boilerplate/autogen.sh.j2', context), True

	yield '.gitmodules', render('boilerplate/gitmodules.j2', context)
	yield '.gitignore', render('boilerplate/gitignore.j2', context)

	if plugin_info['license'] == 'LGPL':
		yield 'COPYING', render('boilerplate/licenses/LGPL.j2', context)

	yield 'src/%s.c' % identitfier, render('boilerplate/src/plugin.c.j2', context)
