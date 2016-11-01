---
title: "Simiki"
date: 2016-11-01 10:12
tag: 模板, wiki
---

# 页面头信息

wiki页面的元数据使用的是YAML Front Matter格式，常用以下头作为模板

```
---
title: "页面头信息"
date: 2016-11-1 00:00
updated: 2016-11-1 10:00
collection: Document
tag: wiki, template
---
```

# 生成目录
在YAML Front Matter下面, wiki内容的顶部，添加一行

```
---
title: "生成目录"
date: 2016-11-1 00:00
updated: 2016-11-1 10:00
collection: Document
tag: wiki, template
---

[TOC]

<content>
```

# Favicon
将文件名为`favicon.ico`的icon文件放在wiki根目录下，在主题模板添加

```
<link rel="shortcut icon" href="{{ site.root }}/favicon.ico" type="image/x-icon">
<link rel="icon" href="{{ site.root }}/favicon.ico" type="image/x-icon">
```