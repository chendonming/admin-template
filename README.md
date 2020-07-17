[toc]

# vue 框架模板

> 使用 git clone 更新拉取模板，vue 有更新会第一时间更新模板， 当前为 vue-cli3 vue2.6。

> 版本信息

```json
{
  "axios": "^0.19.2",
  "core-js": "^3.6.4",
  "element-ui": "^2.13.1",
  "vue": "^2.6.11",
  "vue-i18n": "^8.17.6",
  "vue-router": "^3.1.6",
  "vuex": "^3.1.3"
}
```

## 日志

#### 决定丢弃 document.dispathEvent

原因 window 自带的事件机制是：

- 非响应式的
- 不易传播
  > 如果监听在`dispathEvent`之后，则无法获取到这个信息, 你需要写多个 if else 判断当前信息是否存在，存在即运行不存在则监听
- 不易于管理,追踪
  > event 事件越来越多，即时用一个 constant.js 管理，也显得十分混乱

#### 使用 vuex 代替 document 事件流发布订阅机制

原因:

- 响应式的
  > 更改数值，页面马上显示无需命令式执行逻辑
- 易传播
  > 组件使用 vuex 值，无须担心是否无法获取到这个信息
- 易管理追踪
  > 更改数值，全部使用方法调用，配合 vue-tool 甚至可以实现时间旅行！

## CSS 预处理

> 没有集成任何预处理工具

## 国际化集成

> 已集成国际化，在`i18n/lang`文件夹中可自定义语言， 默认中文 cn

## 代码格式化 【非强制的】

> 使用`prettier`

## IE兼容

> 兼容IE9 部分html5的语法polyfill见`src/polyfill`

> flex最低要求IE10，意味着ie9不能使用flex布局``

## 基础组件 API

### Form 表单集成

> BaseForm 组件继承自 ElementUi Form 组件， ElementUI 组件一切属性均有效，以下是特有的属性

| 属性     |               描述 |
| -------- | -----------------: |
| required | 添加校验规则为必填 |
| mobile   | 添加校验规则为手机 |
| email    | 添加校验规则为邮箱 |

添加自定义规则:

> 只需在 baseComponent/validator/index.js,添加正则校验即可。BaseForm 组件会自动读取 validator 中的 `key` 值

### 弹窗组件

> BasePopup 组件继承自 ElementUi Dialog 组件, ElementUI 组件一切属性均有效，以下是特有的属性

| 属性      |             描述 | 默认  |
| --------- | ---------------: | ----- |
| draggable | 是否可以拖拽弹窗 | false |

### Vuex

> 已集成`vuex`, 在`store/modules`中添加数据
