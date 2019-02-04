#!/bin/bash

TIME=$(date +%s)
DIR=$(dirname "$0")

echo "== creating $DIR/$TIME"
mkdir $DIR/$TIME

echo "== extracting to $DIR/$TIME"
tar xvz -C $DIR/$TIME

echo "== atomicly switching prod-symlink to $DIR/$TIME"
ln -s $TIME $DIR/new
mv -T $DIR/new $DIR/prod
