create-virtualenv:
	virtualenv -ppython3 env

install-dependencies:
	./env/bin/pip install -r requirements.txt
	cd ui/ && npm install

test:
	cd ui/ && npm run test

ui-prod:
	cd ui/ && npm run build-prod

ui-run:
	cd ui/ && npm run build-watch

backend-run:
	FLASK_DEBUG=1 FLASK_APP=main.py ./env/bin/flask run

run-tmux:
	SCREENRC="run-split-tmux"; \
	[ -e "run-split-tmux-`whoami`" ] && SCREENRC="run-split-tmux-`whoami`"; \
	tmux new-session \; source-file "$$PWD/$$SCREENRC"
