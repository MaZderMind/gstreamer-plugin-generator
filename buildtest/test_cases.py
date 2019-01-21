from buildtest.builder import build_plugin_config, build_element_config, build_property_config

WEIRED_CHARS_STRING = "foo \t bar \n\n\n moo ¡“¶¢]|{}≠¿¥€ quotes \"\' umlauts äöüÄÖÜß emoji 🤔😁 closing comment */"
TEST_NAME = 'Test'

test_cases = {
	"default_config": build_plugin_config(),
	"same_name": build_plugin_config(
		name=TEST_NAME,
		description=TEST_NAME,
		author=TEST_NAME,
		author_email=TEST_NAME,
		url=TEST_NAME,
		elements=[
			build_element_config(
				name=TEST_NAME,
				description=TEST_NAME,
				signals=[TEST_NAME],
				properties=[
					build_property_config(
						name=TEST_NAME,
						description=TEST_NAME,
						type='ENUM',
						enum_items=[TEST_NAME]
					)
				]
			)
		]
	),
	"weired_chars": build_plugin_config(
		name=WEIRED_CHARS_STRING,
		description=WEIRED_CHARS_STRING,
		author=WEIRED_CHARS_STRING,
		author_email=WEIRED_CHARS_STRING,
		url=WEIRED_CHARS_STRING,
		elements=[
			build_element_config(
				name=WEIRED_CHARS_STRING,
				description=WEIRED_CHARS_STRING,
				signals=[WEIRED_CHARS_STRING],
				properties=[
					build_property_config(
						name=WEIRED_CHARS_STRING,
						description=WEIRED_CHARS_STRING,
						type='ENUM',
						enum_items=[WEIRED_CHARS_STRING]
					)
				]
			)
		]
	),
}
