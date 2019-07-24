---
title:Popover 弹出框
---

# Popover 弹出框

## 引入

```
import {gPopover} from 'roxas-ui'
```

## 基础用法

trigger 属性可设置 popover 的触发方式。

<ClientOnly>
  <popover-demo-2/>
</ClientOnly>

<ClientOnly>
  <popover-demo-2-code/>
</ClientOnly>

## 位置

<ClientOnly>
  <popover-demo-1/>
</ClientOnly>

<ClientOnly>
  <popover-demo-1-code/>
</ClientOnly>

# 嵌套操作

<ClientOnly>
  <popover-demo-3/>
</ClientOnly>

<ClientOnly>
  <popover-demo-3-code/>
</ClientOnly>

## Popover Attributes

| 参数     | 说明             | 类型                  | 可选值 | 默认值 |
| -------- | ---------------- | --------------------- | ------ | ------ |
| trigger  | popover 触发方式 | click,hover           | —      | click  |
| position | popover 位置     | top,bottom,left,right | —      | top    |

## Slot

| 参数    | 说明                                                              |
| ------- | ----------------------------------------------------------------- |
| content | Popover 内嵌 HTML 文本,scope-slot 可以返回 close 方法关闭 popover |
