# win 初始化

## 安装 scoop

### cmder

注册表

```reg
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Classes\*\shell\Cmder]
@="Cmder"
"Icon"="C:\\Users\\ndzy\\scoop\\apps\\cmder\\current\\Cmder.exe"
[HKEY_CURRENT_USER\Software\Classes\*\shell\Cmder\command]
@="\"C:\\Users\\ndzy\\scoop\\apps\\cmder\\current\\Cmder.exe\" \"%1\""

[HKEY_CURRENT_USER\Software\Classes\Directory\shell\Cmder]
@="Cmder"
"Icon"="C:\\Users\\ndzy\\scoop\\apps\\cmder\\current\\Cmder.exe"
[HKEY_CURRENT_USER\Software\Classes\Directory\shell\Cmder\command]
@="\"C:\\Users\\ndzy\\scoop\\apps\\cmder\\current\\Cmder.exe\" \"%1\""

[HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\Cmder]
@="Cmder"
"Icon"="C:\\Users\\ndzy\\scoop\\apps\\cmder\\current\\Cmder.exe"
[HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\Cmder\command]
@="\"C:\\Users\\ndzy\\scoop\\apps\\cmder\\current\\Cmder.exe\" \"%V\""

```

### mysql

```ini
[mysqld]
datadir=C:/Users/ndzy/scoop/persist/mysql/data
#设置3333端口
port = 3306
# 设置mysql数据库的数据的存放目录
datadir=C:/Users/ndzy/scoop/persist/mysql/data
# 允许最大连接数
max_connections=200
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB

[client]
user=root
```

mysqld --console
mysql -uroot -p 没有密码直接回车即可连接

修改密码
show databases;
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ndzy';

mysqld --install MySQL --defaults-file="C:/Users/ndzy/scoop/apps/mysql/current/my.ini" 要在管理员权限下运行

net start mysql
