create-virtualenv:
	virtualenv -ppython3 env

install-dependencies:
	./env/bin/pip install -r requirements.txt
	cd ui/ && npm install

install-build-dependencies:
	apt install -y build-essential autoconf pkg-config libtool python3 python3-pip gstreamer1.0-tools libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev

test:
	cd ui/ && npm run test

ui-prod:
	cd ui/ && npm run build-prod

ui-run:
	cd ui/ && npm run build-watch

ui-test:
	cd ui/ && npm run test

ui-lint:
	cd ui/ && npm run lint

ui-test-watch:
	cd ui/ && npm run test-watch

backend-run:
	FLASK_DEBUG=1 FLASK_APP=main.py ./env/bin/flask run

backend-test:
	./env/bin/python -m unittest discover -p '*_test.py'

# compiles all build-tests
build-test:
	./env/bin/python ./buildtest/buildtest.py

# compiles all build-tests within a debian-docker
build-test-docker:
	./buildtest/run-in-docker.sh

# sets up the debian-docker for compile-tests but drops you into an interactive shell
build-test-docker-shell:
	./buildtest/run-in-docker.sh --shell

test-all:
	make ui-test ui-lint backend-test build-test

run-tmux:
	SCREENRC="run-split-tmux"; \
	[ -e "run-split-tmux-`whoami`" ] && SCREENRC="run-split-tmux-`whoami`"; \
	tmux new-session \; source-file "$$PWD/$$SCREENRC"

list-phony:
	@perl -ne 'push @a, $$1 if m/^([\w\d-]+):\s/; END { print ".PHONY: ", join(" ", @a), "\n" }' Makefile

.PHONY: create-virtualenv install-dependencies test ui-prod ui-run backend-run run-tmux list-phony
