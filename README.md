gstreamer-plugin-generator
==========================

Setting up Dev-Env
------------------
Install NodeJS to build the UI. I used NodeJS v10 bit v8 might also work.
Also install
 - python3
 - python3-virtualenv
 - make
 - tmux

Execute the following commands to setup your development environment
```
make create-virtualenv install-dependencies
```

Now start up your development environment
```
make run-tmux
```

If you don't like tmux you can also run `make run-ui` and `make run-backend`
in two different terminal tabs.

Now open http://127.0.0.1:5000/ in your browser.

Happy Hacking :-*
