# React学习

## 主要知识
* React
* ES2015
* WebPack2

# 学习进度
## 03-02
* React Starter Pack 下载使用与React初体验

## 05-01
* 配置WebPack
* 配置React
* 配置babel

## 05-03
* WebPack 热加载配置

## 07-02
* React组件

## 07-03
* React多组件嵌套

## 07-04
* JSX内置表达式

## 07-05
* 生命周期

## 08-01
* State属性

## 08-02
* Props属性

## 08-03
* 事件与数据的双向绑定

## 08-04
* 可复用组件

## 08-05
* 组件Refs
* 第一种方式

```javascript
var mySubmitButton = document.getElementById('submitButton');
console.log(mySubmitButton);
ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
//不推荐此方法，有安全隐患
```

* 第二种方法

```javascript
console.log(this.refs.submitButton);
this.refs.submitButton.style.color = 'red';
```
