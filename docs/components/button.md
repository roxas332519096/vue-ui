---
title:Button 按钮
---

# Button 按钮

## 引入

```
improt {gButton,gButtonGroup,gIcon} from 'roxas-ui'
```

常用的操作按钮。

## 默认按钮

基础的按钮用法。

<ClientOnly>
  <button-demo/>
</ClientOnly>

## 按钮图标

带图标的按钮可增强辨识度。

<ClientOnly>
  <button-demo-icon/>
</ClientOnly>

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<ClientOnly>
  <button-demo-loading/>
</ClientOnly>

## 禁用状态

按钮不可用状态。

<ClientOnly>
  <button-demo-disabled/>
</ClientOnly>

## Button Group 按钮组

以按钮组的方式出现，常用于多项类似操作。

<ClientOnly>
  <button-group-demo/>
</ClientOnly>

::: warning

g-button-group 的子元素必须是 g-button,否则不生效。

:::

## Attributes

| 参数      | 说明             | 类型    | 可选值 | 默认值 |
| --------- | ---------------- | ------- | ------ | ------ |
| icon      | 图标类名         | string  | —      | —      |
| iconRight | 图标是否向右     | Boolean | —      | false  |
| loading   | 是否在加载状态中 | Boolean | —      | false  |
| disabled  | 是否禁用状态     | Boolean | —      | false  |
