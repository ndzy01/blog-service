# 安装 mongodb

```
权限不够时使用sudo

curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1804-4.2.6.tgz

tar -zxvf mongodb-linux-x86_64-ubuntu1804-4.2.6.tgz

mkdir -p /home/mongodb/conf /home/mongodb/data /home/mongodb/log   # 配置目录 data目录 日志目录

chmod 777 /home/mongodb/ # 更改权限

mv mongodb-linux-x86_64-ubuntu1804-4.2.6/ /home/mongodb/



cd /home/mongodb/conf
# 注释不要放到文件中，不然容易出问题
vim mongodb.conf  # 新建并编辑配置文件

dbpath=/home/mongodb/data  #数据存储目录

logpath=/home/mongodb/log/mongodb.log     #日志文件路径

logappend = true #追加

port=29999 #端口号

fork=true #后台进程

bind_ip=0.0.0.0 # 远程连接

dbpath=/home/mongodb/data  
logpath=/home/mongodb/log/mongodb.log    
logappend = true
port=29999
fork=true

cd /home/mongodb/mongodb-linux-x86_64-ubuntu1804-4.2.6/bin/

./mongod -f /home/mongodb/conf/mongodb.conf

mongo


```

![install](/mongodb/install.png 'mongodb安装包地址')
