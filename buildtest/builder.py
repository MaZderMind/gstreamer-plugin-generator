def build_plugin_config(
	name='Awsome Plugin',
	description="This is an awsome plugin.\nIt does awsome things.",
	author="MaZderMind",
	author_email="peter@mazdermind.de",
	license="LGPL",
	url="https://github.com/MaZderMind/GstAwsomePlugin",
	elements=None
):
	return {
		"name": name,
		"description": description,
		"author": author,
		"authorEmail": author_email,
		"license": license,
		"url": url,
		"elements": elements or [build_element_config()],
	}


def build_element_config(
	archetype="GstBaseTransform",
	classifications="Filter/Analyzer",
	name="Awsome Filter",
	description="This is a really awsome filter",
	mediatype="VIDEO",
	signals=None,
	properties=None
):
	return {
		"archetype": archetype,
		"classifications": classifications.split("/"),
		"name": name,
		"description": description,
		"mediatype": mediatype,
		"signals": signals or [],
		"properties": properties or [],
	}


def build_property_config(
	name="Awsomeness",
	description="Sets the Awsomeness of this Filter between 0 and 1.",
	type="FLOAT",
	enum_items=None,
):
	return {
		"name": name,
		"description": description,
		"type": type,
		"enumItems": enum_items or ['Foo', 'Bar'],
	}
