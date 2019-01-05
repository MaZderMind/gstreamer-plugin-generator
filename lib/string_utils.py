import re


def split_words(string):
	if not string:
		return []

	with_separators = re.sub(r'([A-Z]+)', '-\\1', string)
	words = re.split(r'[^a-zA-Z]', with_separators)
	return list(filter(lambda word: len(word) > 0, words))


# 'OneTwo-Three' -> 'onetwothree'
def all_lower_case(string):
	words = split_words(string)
	lower_words = map(lambda word: word.lower(), words)
	return ''.join(lower_words)


# 'OneTwo-Three' -> 'ONE_TWO_THREE'
def upper_snake_case(string):
	words = split_words(string)
	lower_words = map(lambda word: word.upper(), words)
	return '_'.join(lower_words)


# 'OneTwo-Three' -> 'OneTwoThree'
def pascal_case(string):
	words = split_words(string)
	lower_words = map(lambda word: word[0].upper() + word.lower()[1:], words)
	return ''.join(lower_words)


def escape_quotes(value):
	return value.replace('"', '\\"')


def quote(value):
	return '\"' + value.replace('"', '\\"') + '\"'