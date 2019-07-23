---
title: 快速开始
---

# 快速开始

## 引入框架

```
import {gButton} from 'roxas-ui'
import 'roxas-ui/dist/index.css'

export default {
    name:'app',
    components:{
        gButton,
}
```

使用本框架前,请将 css 盒模型设置成 border-box

```
*,
*::before,
*::after{box-sizing:border-box}
```

## 完整插件列表和引入方式

```
improt Vue from 'vue'
import {
    gButton,
    gIcon,
    gButtonGroup,
    gInput,
    gRow,
    gCol,
    layout,
    header,
    content,
    sider,
    footer,
    gToast,
    plugin,
    gTabs,
    gTabsHead,
    gTabsBody,
    gTabsItem,
    gTabsPane,
    gPopover,
    gCollapse,
    gCollapseItem
} from 'roxas-ui'
import 'roxas-ui/dist/index.css'

Vue.component('g-button', gButton)
Vue.component('g-icon', gIcon)
Vue.component('g-button-group', gButtonGroup)
Vue.component('g-input', gInput)
Vue.component('g-row', gRow)
Vue.component('g-col', gCol)
Vue.component('g-layout', layout)
Vue.component('g-header', header)
Vue.component('g-content', content)
Vue.component('g-sider', sider)
Vue.component('g-footer', footer)
Vue.component('g-toast', gToast)
Vue.use(plugin)
Vue.component('g-tabs', gTabs)
Vue.component('g-tabs-head', gTabsHead)
Vue.component('g-tabs-body', gTabsBody)
Vue.component('g-tabs-item', gTabsItem)
Vue.component('g-tabs-pane', gTabsPane)
Vue.component('g-popover', gPopover)
Vue.component('g-collapse', gCollapse)
Vue.component('g-collapse-item', gCollapseItem)

export default {
    name:'app',
}
```
