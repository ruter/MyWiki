#!/bin/bash

msg=$1

git add .

if [[ $msg == '' ]]; then
	git commit -m "Add new wiki."
else
	git commit -m "$msg"
fi

git push origin master
