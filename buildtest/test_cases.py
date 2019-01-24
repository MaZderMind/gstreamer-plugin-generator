from buildtest.builder import build_plugin_config, build_element_config, build_property_config

WEIRED_CHARS_STRING = "foo \t bar \n\n\n moo ¡“¶¢]|{}≠¿¥€ quotes \"\' umlauts äöüÄÖÜß emoji 🤔😁 closing comment */"
TEST_NAME = 'Test'

test_cases = {
	"GstBaseTransform": build_plugin_config(elements=[
		build_element_config(mediatype='VIDEO', name="Video", archetype="GstBaseTransform"),
		build_element_config(mediatype='AUDIO', name="Audio", archetype="GstBaseTransform"),
		build_element_config(mediatype='OTHER', name="Other", archetype="GstBaseTransform"),
	]),
	"GstBaseSrc": build_plugin_config(elements=[
		build_element_config(mediatype='VIDEO', name="Video", archetype="GstBaseSrc"),
		build_element_config(mediatype='AUDIO', name="Audio", archetype="GstBaseSrc"),
		build_element_config(mediatype='OTHER', name="Other", archetype="GstBaseSrc"),
	]),
	"GstPushSrc": build_plugin_config(elements=[
		build_element_config(mediatype='VIDEO', name="Video", archetype="GstPushSrc"),
		build_element_config(mediatype='AUDIO', name="Audio", archetype="GstPushSrc"),
		build_element_config(mediatype='OTHER', name="Other", archetype="GstPushSrc"),
	]),

	"multiple_elements": build_plugin_config(
		elements=[
			build_element_config(name="Test 1"),
			build_element_config(name="Test 2"),
			build_element_config(name="Test 3"),
		]
	),

	"multiple_signals": build_plugin_config(
		elements=[
			build_element_config(signals=['Foo', 'Bar', 'Moo', 'Noo']),
		]
	),

	"property_types": build_plugin_config(elements=[
		build_element_config(properties=[
			build_property_config(type='STRING', name='STRING-Property'),
			build_property_config(type='BOOLEAN', name='BOOLEAN-Property'),
			build_property_config(type='CHAR', name='CHAR-Property'),
			build_property_config(type='UCHAR', name='UCHAR-Property'),
			build_property_config(type='INT', name='INT-Property'),
			build_property_config(type='UINT', name='UINT-Property'),
			build_property_config(type='LONG', name='LONG-Property'),
			build_property_config(type='ULONG', name='ULONG-Property'),
			build_property_config(type='INT64', name='INT64-Property'),
			build_property_config(type='UINT64', name='UINT64-Property'),
			build_property_config(type='FLOAT', name='FLOAT-Property'),
			build_property_config(type='DOUBLE', name='DOUBLE-Property'),
			build_property_config(type='ENUM', name='ENUM-Property'),
			build_property_config(type='FLAGS', name='FLAGS-Property'),
		]),
	]),

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
				classifications=TEST_NAME,
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
				classifications=WEIRED_CHARS_STRING,
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
