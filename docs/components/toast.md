---
title:Toast
---

# Toast

引入方法
```
import {plugin,gToast} from 'roxas-ui'
Vue.component('g-toast', gToast)
Vue.use(plugin)
```

本框架 为 Vue.prototype 添加了全局方法 $toast。因此可以采用本页面中的方式调用 Toast。

## 基本用法

3 秒后自动消失。

<ClientOnly>
  <toast-demo-1/>
</ClientOnly>
<ClientOnly>
  <toast-demo-1-code/>
</ClientOnly>

## 关闭时间

<ClientOnly>
  <toast-demo-2/>
</ClientOnly>
<ClientOnly>
  <toast-demo-2-code/>
</ClientOnly>

## 设置关闭按钮

<ClientOnly>
  <toast-demo-3/>
</ClientOnly>
<ClientOnly>
  <toast-demo-3-code/>
</ClientOnly>

可以设置关闭按钮,并执行回调。


## 使用HTML片段

<ClientOnly>
  <toast-demo-4/>
</ClientOnly>
<ClientOnly>
  <toast-demo-4-code/>
</ClientOnly>

enableHtml 属性可设置是否支持HTML片段

::: tip
虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。请确保HTML片段的内容是可信的。
:::

## 位置

<ClientOnly>
  <toast-demo-5/>
</ClientOnly>
<ClientOnly>
  <toast-demo-5-code/>
</ClientOnly>

## Toast Attributes

| 参数        | 说明               | 类型           | 可选值              | 默认值                              |
|-------------|--------------------|----------------|---------------------|-------------------------------------|
| autoClose   | 自动关闭的时间     | boolean/number | —                   | 3                                   |
| closeButton | 设置关闭按钮与回调 | object         | —                   | {text: "关闭", callback: undefined} |
| enableHtml  | 是否使用HTML片段   | boolean        | —                   | false                               |
| position    | 位置               | string         | top, bottom, middle | top                                 |

