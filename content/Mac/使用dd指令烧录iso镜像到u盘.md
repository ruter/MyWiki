---
title: "使用dd指令烧录ISO镜像到U盘"
date: 2017-01-02 00:19
tag: 烧录, 镜像, dd指令
---

# 查看位置
打开`终端`，使用`diskutil list`命令查看所有磁盘，记住所要写入的U盘的位置，如`/dev/disk1`

# 取消挂载
用`diskutil unmount /dev/disk1`命令取消挂载U盘

# 写入镜像
使用如下命令将镜像写入U盘，其中`if`表示镜像所在路径:

```
sudo dd if=xxx.iso of=/dev/disk1 bs=1m; sync
```

# 弹出U盘
写入完毕后，即可弹出U盘:

```
diskutil eject /dev/disk1
```
