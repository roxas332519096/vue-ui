---
title:布局 Layout
---

# 布局 Layout

## 引入

```
import {gLayout,gHeader,gContent,gSider,gFooter} from 'roxas-ui'
```

用于布局的容器组件，方便快速搭建页面的基本结构：

g-layout：外层容器

g-header：顶栏容器。

g-sider：侧边栏容器。

g-content：主要区域容器。

g-footer：底栏容器。

::: tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，g-layout 的子元素只能是后四者，后四者的父元素也只能是 g-layout。
:::

## 常见页面布局

<ClientOnly>
  <layout-demo/>
</ClientOnly>
<ClientOnly>
  <layout-demo-code/>
</ClientOnly>
