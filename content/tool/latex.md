---
title: "LaTeX"
date: 2016-12-08 22:22
tag: LaTeX
---

# 排版工具
以`XeLaTeX`为主。

# 控制序列
以反斜杠`\`开头，以第一个**空格**或**非字母**的字符结束的一串文字，他们并不被输出，但是他们会影响输出文档的效果。

```
\documentclass{article}
%这里是导言区
\begin{document}
Hello, world!
\end{document}
```

`\documentclass{article}`的控制序列是`documentclass`，它后面紧跟着的`{article}`代表这个控制序列有一个必要的**参数**，该参数的值为`article`。这个控制序列的作用是调用名为`article`的文档类。

注意: `TeX`的控制序列是**大小写敏感**的

控制序列`begin`总是与`end`成对出现的，这两个控制序列以及他们之间的内容被称为`环境`，它们之后的第一个必要参数总是一致的，被称为`环境名`。

注意: 只有在`document`环境中的内容，才会被正常输出到文档中或是作为控制序列对文档产生影响

`\begin{document}`与`\documentclass{article}`之间的部分被称为`导言区`。导言区中的控制序列通常会影响到整个输出文档，如页面大小、页眉页脚样式、章节标题样式等。

# 中文支持
只需要使用几个简单的`宏包`，就能完成中文支持了，所谓宏包，就是一系列控制序列的合集。

宏包的调用方式为`\usepackage{...}`

可以使用`CTeX`或`xeCJK`宏包来处理中英文混排的文档，下面以`xeCJK`为例

```
\documentclass{article}
\usepackage{xeCJK} %调用 xeCJK 宏包
\begin{document}
你好，world!
\end{document}
```

# 标题、作者、日期
为文档定义标题、作者和日期，之后使用控制序列`maketitle`按预定的格式展现

```
\documentclass{article}
\usepackage{xeCJK}

\title{Learn LaTeX}
\author{Ruter}
\date{\today}

\begin{document}
\maketitle
你好，world!
\end{document}
```

# 章节和段落
在文档类`article`中，定义了五个控制序列来调整行文组织结构

- `\section{...}`
- `\subsection{...}`
- `\subsubsection{...}`
- `\paragraph{...}`
- `\subparagraph{...}`

举个例子

```
\documentclass{article}
\usepackage{xeCJK}

\title{Learn LaTeX}
\author{Ruter}
\date{\today}

\begin{document}
\maketitle

\section{你好中国}
中国在East Asia.
\subsection{Hello Beijing}
北京是capital of China.

\subsubsection{Hello Dongcheng District}
\paragraph{Tian'anmen Square}
is in the center of Beijing
\subparagraph{Chairman Mao}
is in the center of 天安门广场。

\subsection{Hello 山东}
\paragraph{山东大学} is one of the best university in 山东。

\end{document}
```

# 插入目录
要插入目录，使用`\tableofcontents`控制序列，置于`\maketitle`前

# 数学公式
使用`AMS-LaTeX`提供的数学功能，需要在导言区加载`amsmath`宏包

```
\usepackage{amsmath}
```

## 模式

## 上下标

## 根式与分式

## 运算符

## 定界符

## 省略号

## 矩阵

## 多行公式

## 公式组

## 分段函数

# 图片和表格

## 图片

## 表格

## 浮动体

# 版面设置