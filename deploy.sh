#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build #npm run docs:build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name ${name}
git config user.email ${email}
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://${test}@github.com/huiliangShen/blog.git master:gh-pages

cd -
