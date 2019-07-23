---
title:Tabs 标签页
---

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 引入
```
improt {gTabs,gTabsHead,gTabsItem,gTabsPane,gTabsBody} from 'roxas-ui'
```

## 基础用法

<ClientOnly>
  <tabs-demo-1/>
</ClientOnly>

Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 selected 属性来指定当前选中的标签页。

<ClientOnly>
  <tabs-demo-1-code/>
</ClientOnly>

## 禁用状态

禁用某个选项卡

<ClientOnly>
  <tabs-demo-3/>
</ClientOnly>

<ClientOnly>
  <tabs-demo-3-code/>
</ClientOnly>

## Icon

可在 g-tabs-head 设置 icon

<ClientOnly>
  <tabs-demo-4/>
</ClientOnly>

<ClientOnly>
  <tabs-demo-4-code/>
</ClientOnly>

## 位置

可以通过 direction 设置标签的位置

<ClientOnly>
  <tabs-demo-5/>
</ClientOnly>

<ClientOnly>
  <tabs-demo-5-code/>
</ClientOnly>

## Tabs Attributes

| 参数      | 说明              | 类型   | 可选值              | 默认值     |
|-----------|-------------------|--------|---------------------|------------|
| selected  | 选中选项卡的 name | string | —                   | -          |
| direction | 位置              | string | horizontal,vertical | horizontal |

## Tabs Item Attributes

| 参数    | 说明           | 类型    | 可选值 | 默认值 |
|---------|----------------|---------|--------|--------|
| name    | 选项卡名称     | string  | —      | -      |
| disable | 选项卡是否禁用 | Boolean | —      | false  |

## Tabs Pane Attributes

| 参数 | 说明       | 类型   | 可选值 | 默认值 |
|------|------------|--------|--------|--------|
| name | 选项卡名称 | string | —      | -      |