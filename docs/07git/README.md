# 版本回退

git log --pretty=oneline

git log

```
git reset --hard HEAD^ 回退到上一个版本
git reset --hard cc6d6fba3016b20649389c043986c00515d9ef90 指定版本号  回退

git reset --soft HEAD^ 放弃上次提交
```

# 文件服务

~~~
git clone https://github.com/ndzy01/files-front.git
git clone https://github.com/ndzy01/files-service.git
git clone https://github.com/ndzy01/files.git
~~~

# 清除用户信息
git config --system --unset credential.helper
git config --global --unset credential.helper
git config --local --unset credential.helper

