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
