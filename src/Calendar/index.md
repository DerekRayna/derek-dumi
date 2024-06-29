---
nav:
  title: 组件
  order: 2
category: Components
title: Calendar 日历 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 2 # 分组排序，值越小越靠前
---

# Calendar 日历

## 介绍

基础的日历组件 Calendar

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx">基础用法</code>
<code src="./demo/control.tsx">可控用法</code>
<code src="./demo/unControl.tsx">不可控用法</code>

## API

<!-- 会生成api表格 -->

| 属性             | 类型                               | 默认值      | 必填  | 说明                 |
| ---------------- | ---------------------------------- | ----------- | ----- | -------------------- |
| value            | Dayjs                              | new dayjs() | false | 受控组件值           |
| defaultValue     | Dayjs                              | new dayjs() | false | 非受控组件默认值     |
| locale           | en-US / zh-CN                      | zh-CN       | false | 国际化               |
| dateRender       | (currentDate: Dayjs) => ReactNode; | undefined   | false | 非受控组件默认值     |
| className        | string / string[]                  | undefined   | false | 非受控组件默认值     |
| dateInnerContent | (currentDate: Dayjs) => ReactNode; | undefined   | false | 非受控组件默认值     |
| onChange         | (Dayjs()) => void                  | undefined   | false | 日期改变时的回调函数 |
