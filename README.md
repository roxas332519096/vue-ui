## 一个基于 Vue 的 UI 框架

[![Build Status](https://www.travis-ci.org/roxas332519096/vue-ui.svg?branch=master)](https://www.travis-ci.org/roxas332519096/vue-ui)

## 介绍

## 开始使用

1. 安装

```
npm i --save roxas-ui-test
```

2. 引入

```
import {gButton,gButtonGroup,gIcon} from 'roxas-ui'
import 'roxas-ui/dist/index.css'

export default {
    name:'app',
    components:{
        gButton,
        gButtonGroup,
        gIcon
}
```

3. 添加 css 样式

   使用本框架前,请 css 设计 border-box

   ```
   *,
   *::before,
   *::after{box-sizing:border-box}
   ```

   IE11 及以上浏览器都支持该样式.

## 文档

[文档地址](https://roxas332519096.github.io/vue-ui/)

## 提问

## 变更记录

## 联系方式

## 贡献代码
