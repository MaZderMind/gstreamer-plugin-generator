#!/bin/sh
set -xe

command='python3 ./buildtest/buildtest.py'
if [[ $1 == '--shell' ]]; then
	command='bash'
fi


docker run --rm -it -v $(realpath .):/app -w /app debian:stretch sh -c "
	apt update &&
	apt install make &&
	make install-build-dependencies &&
	pip3 install -r requirements.txt &&
	$command
"
