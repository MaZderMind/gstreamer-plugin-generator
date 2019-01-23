import json
from datetime import datetime

from jinja2 import Environment, FileSystemLoader

from lib.string_utils import all_lower_case, upper_snake_case, pascal_case, quote_for_c, escape_quotes_for_c, \
	lower_snake_case, kebab_case, escape_comment_for_c

env = Environment(
	loader=FileSystemLoader('templates'),
	keep_trailing_newline=True,
	trim_blocks=True,
	lstrip_blocks=True,
)
env.filters['escape_quotes'] = escape_quotes_for_c
env.filters['escape_comment'] = escape_comment_for_c
env.filters['quote'] = quote_for_c
env.filters['all_lower_case'] = all_lower_case
env.filters['upper_snake_case'] = upper_snake_case
env.filters['lower_snake_case'] = lower_snake_case
env.filters['pascal_case'] = pascal_case
env.filters['kebab_case'] = kebab_case


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

	yield 'boilerplate-config.json', json.dumps(plugin_info, indent="  ", sort_keys=True)
	yield 'README', render('boilerplate/README.md.j2', context)
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

	yield 'src/Makefile.am', render('boilerplate/src/Makefile.am.j2', context)
	yield 'src/%s-plugin.c' % identitfier, render('boilerplate/src/plugin.c.j2', context)
	for element in plugin_info['elements']:
		element_identitfier = all_lower_case(element['name'])

		context['element'] = element

		yield 'test-scripts/inspect-%s.sh' % element_identitfier, \
			  render('boilerplate/test-scripts/inspect.sh.j2', context), True

		known_archetypes = ['GstBaseTransform', 'GstBaseSrc', 'GstPushSrc']
		if element['archetype'] in known_archetypes:
			archetype_identifier = kebab_case(element['archetype'])
			yield 'src/%s.h' % element_identitfier, render('boilerplate/src/%s.h.j2' % archetype_identifier, context)
			yield 'src/%s.c' % element_identitfier, render('boilerplate/src/%s.c.j2' % archetype_identifier, context)
			yield 'test-scripts/run-%s.sh' % element_identitfier, \
				  render('boilerplate/test-scripts/run-%s.sh.j2' % archetype_identifier, context), True
