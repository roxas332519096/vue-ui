---
title:Input 输入框
---

# Input 输入框

## 引入

```
improt {gInput} from 'roxas-ui'
```

## 基础用法

<ClientOnly>
  <input-demo-1/>
</ClientOnly>

<ClientOnly>
  <input-demo-1-code/>
</ClientOnly>

## 禁用状态

<ClientOnly>
  <input-demo-2/>
</ClientOnly>

<ClientOnly>
  <input-demo-2-code/>
</ClientOnly>

## 只读状态

<ClientOnly>
  <input-demo-3/>
</ClientOnly>

<ClientOnly>
  <input-demo-3-code/>
</ClientOnly>

## 错误提示

可设置错误信息

<ClientOnly>
  <input-demo-4/>
</ClientOnly>

<ClientOnly>
  <input-demo-4-code/>
</ClientOnly>

## 密码

<ClientOnly>
  <input-demo-5/>
</ClientOnly>

<ClientOnly>
  <input-demo-5-code/>
</ClientOnly>

## Attributes

| 参数     | 说明            | 类型          | 可选值        | 默认值 |
| -------- | --------------- | ------------- | ------------- | ------ |
| v-model  | 绑定值          | string/number | —             | —      |
| disabled | 是否禁用状态    | Boolean       | —             | false  |
| readonly | 是否只读状态    | Boolean       | —             | false  |
| error    | 错误信息        | string        | —             | —      |
| type     | 设置文本/密码框 | string        | text,password | text   |

## Events

| 事件名称 | 说明                      | 回调参数       |
| -------- | ------------------------- | -------------- |
| blur     | 组件失去焦点时触发        | (value: string | number) |
| input    | 组件触发 input 事件时触发 | (value: string | number) |
| focus    | 组件获得焦点时触发        | (value: string | number) |
| change   | 在 Input 值改变时触发     | (value: string | number) |
