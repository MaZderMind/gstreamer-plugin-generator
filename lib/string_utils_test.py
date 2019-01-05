import unittest

from lib.string_utils import split_words, all_lower_case, upper_snake_case, pascal_case, escape_quotes, quote, \
	lower_snake_case


class TestSplitWords(unittest.TestCase):
	def test_split_words_separated_with_saces(self):
		words = split_words('lorem ipsum dolor')
		self.assertEqual(words, ['lorem', 'ipsum', 'dolor'])

	def test_split_words_separated_with_dashes(self):
		words = split_words('lorem-ipsum-dolor')
		self.assertEqual(words, ['lorem', 'ipsum', 'dolor'])

	def test_split_words_separated_with_uppercase(self):
		words = split_words('LoremIpsumDolor')
		self.assertEqual(words, ['Lorem', 'Ipsum', 'Dolor'])

	def test_split_words_separated_with_multiple_markers(self):
		words = split_words('LoremIpsum dolor-sit Amet')
		self.assertEqual(words, ['Lorem', 'Ipsum', 'dolor', 'sit', 'Amet'])

	def test_keeps_numbers(self):
		words = split_words('MP4-Muxer')
		self.assertEqual(words, ['MP4', 'Muxer'])


class CaseFilters(unittest.TestCase):
	def test_all_lower_case(self):
		transformed = all_lower_case('LoremIpsum dolor-sit')
		self.assertEqual(transformed, 'loremipsumdolorsit')

	def test_upper_snake_case(self):
		transformed = upper_snake_case('LoremIpsum dolor-sit')
		self.assertEqual(transformed, 'LOREM_IPSUM_DOLOR_SIT')

	def test_ower_snake_case(self):
		transformed = lower_snake_case('LoremIpsum dolor-sit')
		self.assertEqual(transformed, 'lorem_ipsum_dolor_sit')

	def test_pascal_case(self):
		transformed = pascal_case('LoremIpsum dolor-sit')
		self.assertEqual(transformed, 'LoremIpsumDolorSit')


class Quoting(unittest.TestCase):
	def escape_quotes(self):
		escaped = escape_quotes('Foo "Bar" Moo \'Foo\' Qoo')
		self.assertEqual(escaped, 'Foo \\"Bar\\" Moo \'Foo\' Qoo')

	def quote(self):
		quoted = quote('Foo "Bar" Moo \'Foo\' Qoo')
		self.assertEqual(quoted, '"Foo \\"Bar\\" Moo \'Foo\' Qoo"')
