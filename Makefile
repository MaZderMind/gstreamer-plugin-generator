default: tar

tar: clean ui-prod
	tar -czf dist.tar *.py lib static templates

clean:
	rm -rf static/ui __pycache__ **/__pycache__

create-virtualenv:
	virtualenv -ppython3 env

install-dependencies:
	./env/bin/pip install -r requirements.txt
	cd ui/ && npm install

install-build-dependencies:
	apt install -y build-essential autoconf pkg-config libtool python3 python3-pip gstreamer1.0-tools libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev

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

test:
	make ui-test ui-lint backend-test build-test

run-tmux:
	SCREENRC="run-split-tmux"; \
	[ -e "run-split-tmux-`whoami`" ] && SCREENRC="run-split-tmux-`whoami`"; \
	tmux new-session \; source-file "$$PWD/$$SCREENRC"

list-phony:
	@perl -ne 'push @a, $$1 if m/^([\w\d-]+):\s/; END { print ".PHONY: ", join(" ", @a), "\n" }' Makefile

.PHONY: default tar clean create-virtualenv install-dependencies install-build-dependencies ui-prod ui-run ui-test ui-lint ui-test-watch backend-run backend-test build-test build-test-docker build-test-docker-shell test run-tmux list-phony
