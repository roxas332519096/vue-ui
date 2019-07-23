---
title:Grid 栅格
---

# Grid 栅格

## 引入

```
improt {gRow,gCol} from 'roxas-ui'
```

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。

<ClientOnly>
  <grid-demo-1/>
</ClientOnly>

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

<ClientOnly>
  <grid-demo-1-code/>
</ClientOnly>

## 分栏布局

分栏之间存在间隔。

<ClientOnly>
  <grid-demo-2/>
</ClientOnly>

Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

<ClientOnly>
  <grid-demo-2-code/>
</ClientOnly>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<ClientOnly>
  <grid-demo-3/>
</ClientOnly>

<ClientOnly>
  <grid-demo-3-code/>
</ClientOnly>

## 分栏偏移

支持偏移指定的栏数。

<ClientOnly>
  <grid-demo-4/>
</ClientOnly>

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

<ClientOnly>
  <grid-demo-4-code/>
</ClientOnly>

## 响应式布局

预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<ClientOnly>
  <grid-demo-5/>
</ClientOnly>

<ClientOnly>
  <grid-demo-5-code/>
</ClientOnly>

## Row Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| gutter | 栅格间隔 | number | —      | 0      |

## Col Attributes

| 参数 | 说明                                 | 类型                                 | 可选值 | 默认值 |
| ---- | ------------------------------------ | ------------------------------------ | ------ | ------ |
| span | 栅格占据的列数                       | number                               | —      | 24     |
| xs   | <768px 响应式栅格数或者栅格属性对象  | number                               | —      | 0      |
| sm   | ≥768px 响应式栅格数或者栅格属性对象  | object (例如： {span: 4, offset: 4}) | —      | false  |
| md   | ≥992px 响应式栅格数或者栅格属性对象  | object (例如： {span: 4, offset: 4}) | —      | false  |
| lg   | ≥1200px 响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4}) | —      | false  |
| xl   | ≥1920px 响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4}) | —      | false  |
