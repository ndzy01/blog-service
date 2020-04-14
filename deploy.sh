#!/usr/bin/env sh
# abort on errors
set -e
# rm -rf ./docs/.vuepress/dist && mkdir ./docs/.vuepress/dist
# build
npm run build


# navigate into the build output directory
cd ./docs/.vuepress/dist

# if you are deploying to a custom domain
echo '# 笔记' > README.md

git init

git add -A
git commit -m 'deploy'
git remote add origin https://github.com/ndzy01/ndzy01.github.io.git

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -u origin master -f 

cd -