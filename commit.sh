#!/bin/zsh

cd /Volumes/Stiky/Document/MyWiki
git add .
git commit -m "Add new wiki."
git push origin master
simiki g
cd output
git add .
git commit -m "Add new wiki."
git push origin gh-pages