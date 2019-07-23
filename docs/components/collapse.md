---
title:Collapse 折叠面板
---

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 引入
```
improt {gCollaspe,gCollaspeItem,gTabsItem} from 'roxas-ui'
```

## 基础用法

可同时展开多个面板，面板之间不影响

<ClientOnly>
  <collapse-demo-1/>
</ClientOnly>
<ClientOnly>
  <collapse-demo-1-code/>
</ClientOnly>

## 手风琴效果
<ClientOnly>
  <collapse-demo-2/>
</ClientOnly>
<ClientOnly>
  <collapse-demo-2-code/>
</ClientOnly>

每次只能展开一个面板

## Collapse Attributes

| 参数     | 说明           | 类型    | 可选值 | 默认值 |
|----------|----------------|---------|--------|--------|
| selected | 当前激活的面板 | Array   | —      | —      |
| single   | 是否手风琴模式 | boolean | —      | —      |

## Collapse Item Attributes

| 参数  | 说明       | 类型          | 可选值 | 默认值 |
|-------|------------|---------------|--------|--------|
| title | 面板标题   | string        | —      | —      |
| name  | 唯一标志符 | string/number | —      | —      |
