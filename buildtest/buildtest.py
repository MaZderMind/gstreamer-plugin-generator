#!/usr/bin/env python3
import argparse
import codecs
import logging
import os
import sys

sys.path.insert(0, os.path.join(sys.path[0], '..'))


def main(restrict_test_cases, keep_directories):
	from buildtest.runner import run_build_test
	from buildtest.test_cases import test_cases

	logging.debug("starting build-test")

	failed = False
	for name, config in test_cases.items():
		if len(restrict_test_cases) > 0 and name not in restrict_test_cases:
			logging.debug("skipping build-test for %s", name)
			continue

		logging.debug("starting build-test for %s", name)
		try:
			run_build_test(config, keep_directories)
		except Exception as e:
			failed = True
			logging.error("failed test %s:\n%s", name, e)

	if failed:
		logging.error("failed at least one test, failing the build-suite")
		sys.exit(42)

	else:
		logging.info("all tests succeeded")
		sys.exit(0)


if __name__ == '__main__':
	sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
	logging.basicConfig(level=logging.DEBUG)

	parser = argparse.ArgumentParser(description='Build Test-Cases.')
	parser.add_argument('--keep', help='keep the temp-directories', action='store_true')
	parser.add_argument('test_cases', metavar='C', type=str, nargs='*',
						help='restrict to the specified testcases')
	args = parser.parse_args()
	logging.debug("calleth with %s", args)

	main(args.test_cases, args.keep)
