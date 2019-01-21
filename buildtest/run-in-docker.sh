#!/bin/sh
set -xe

command='python3 ./buildtest/buildtest.py'
if [[ $1 == '--shell' ]]; then
	command='bash'
fi


docker run --rm -it -v $(realpath .):/app -w /app debian:stretch sh -c "
	apt update &&
	apt install -y \
		build-essential autoconf pkg-config libtool \
		python3 python3-pip \
		gstreamer1.0-tools libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev &&
	pip3 install -r requirements.txt &&
	$command
"
