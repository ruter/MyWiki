#!/bin/bash

msg=$1

simiki g
cd output
git add .

if [[ $msg == '' ]]; then
	git commit -m "Add new wiki."
else
	git commit -m "$msg"
fi

git push origin gh-pages
