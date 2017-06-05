<h1 align="center">React学习笔记📒</h1>
<p align="center"><img src="http://www.kejiganhuo.tech/wp-content/uploads/2017/06/bg2015033101.png" /></p>


* 知识来源：
* 慕课网：React.js入门与案例开发
* 《React全栈-Redux+Flux+webpack+Babel整合开发》  

## 目录

* [01-01](https://github.com/TYRMars/ReactLearn#01-01) `基础知识目录与相关版本`
* [02-01](https://github.com/TYRMars/ReactLearn#02-01) `React简介`
* [02-02](https://github.com/TYRMars/ReactLearn#02-02) `其他知识梳理`
* [02-03](https://github.com/TYRMars/ReactLearn#02-03) `其他知识梳理-利用babel把ES5转化为ES6`
* [03-01](https://github.com/TYRMars/ReactLearn#03-01) `React版本选择`
* [03-02](https://github.com/TYRMars/ReactLearn#03-02) `React Starter Pack 下载使用与React初体验`
* [04-01](https://github.com/TYRMars/ReactLearn#04-01) `NodeJS简介`
* [04-02](https://github.com/TYRMars/ReactLearn#04-02) `NodeJS安装`
* [04-03](https://github.com/TYRMars/ReactLearn#04-03) `NPM配置国内源`
* [05-01](https://github.com/TYRMars/ReactLearn#05-01) `使用NPM配置React`
* [05-02](https://github.com/TYRMars/ReactLearn#05-02) `WebPack 热加载配置(上)`
* [05-03](https://github.com/TYRMars/ReactLearn#05-03) `WebPack 热加载配置(中)`
* [05-04](https://github.com/TYRMars/ReactLearn#05-04) `WebPack 热加载配置(下)`
* [05-05](https://github.com/TYRMars/ReactLearn#05-05) `ChromeReact插件使用`
* [06-01](https://github.com/TYRMars/ReactLearn#06-01) `开发工具 Atom`
* [06-02](https://github.com/TYRMars/ReactLearn#06-02) `React开发相关Atom插件配置`
* [07-01](https://github.com/TYRMars/ReactLearn#07-01) `React虚拟DOM概念`
* [07-02](https://github.com/TYRMars/ReactLearn#07-02) `React组件`
* [07-03](https://github.com/TYRMars/ReactLearn#07-03) `React多组件嵌套`
* [07-04](https://github.com/TYRMars/ReactLearn#07-04) `JSX内置表达式`
* [07-05](https://github.com/TYRMars/ReactLearn#07-05) `生命周期`
* [08-01](https://github.com/TYRMars/ReactLearn#08-01) `State属性`
* [08-02](https://github.com/TYRMars/ReactLearn#08-02) `Props属性`
* [08-03](https://github.com/TYRMars/ReactLearn#08-03) `事件与数据的双向绑定`
* [08-04](https://github.com/TYRMars/ReactLearn#08-04) `可复用组件`
* [08-05](https://github.com/TYRMars/ReactLearn#08-05) `组件Refs(操作DOM的二种方法)`
* [08-06](https://github.com/TYRMars/ReactLearn#08-06) `独立组件间共享 Mixins`
* [—————](https://github.com/TYRMars/ReactLearn#知识扩展) `知识扩展`
* [00-01](https://github.com/TYRMars/ReactLearn#00-01) `JSX的来历`
-----------------------------------------------------------------------------------------------



# 学习进度
## 01-01
### 基础知识目录与相关版本
* React
* ES2015
* WebPack2
* Atom

## 02-01
### React简介
* React 是近期非常热门的一个前端开发框架，其本身作为 MVC 中的 View 层可以用来构建 UI，也可以以插件的形式应用到 Web 应用非 UI 部分的构建中，轻松实现与其他 JS 框架的整合，比如 AngularJS。同时，React 通过对虚拟 DOM 中的微操作来实对现实际 DOM 的局部更新，提高性能。其组件的模块化开发提高了代码的可维护性。单向数据流的特点，让每个模块根据数据量自动更新，让开发者可以只专注于数据部分，改善程序的可预测性。
* Facebook内部用来开发Instagram
* JavaScript MVC框架
* 2013年开源React
* 随后发布React Native
* React Github [React](http://www.github.com/facebook/react)

## 02-02
### 其他知识梳理
* JavaScript
* ES5/ES6
* NodeJS
* HTML
* CSS
* 相关知识请看我的博客前端开发基础知识部分[科技干货-Blog](http://www.kejiganhuo.tech)

## 02-03
### 其他知识梳理-利用babel把ES5转化为ES6
* 安装`babel`
* ` sudo npm install --save-dev babel-cli babel-preset-env`
* ES6语法，因为很多浏览器还不支持ES6所以需要进行转换
``` javascript
  add(items){
    items.map(item => item +1)
  }
```
* 在`package.json`中，通过以下设置来实现转换
```javascript
{
  ...
  "script":{
    build:"babel index.js --out --file bundel.js"
  }
  ...
}

```
* 然后通过执行`npm run build`,编译成功后就会出现如下,打开`bundel.js`(命名可自己拟定)
```javascript
  "use strict"
  add(items)(items.map(function(){
    return item + 1;
  }));
```
* 此时就完成了转换！！！
* [ES5浏览器支持](http://kangax.github.io/compat-table/es5/)
* [ES6浏览器支持](http://kangax.github.io/compat-table/es6/)


## 03-01
### React版本选择
* 查看历史版本
* [React历史版本](http://facebook.github.io/react/blog/all.html)
* 安装采用NPM的方法`npm install react`
* 如果要安装在项目目录下`cd react／`下面，然后`npm install react --save`
* 如果想在电脑全局进行安装则`npm install react  -g`
* 会自动安装最新的版本，我用的是`React 15.5.4`

## 03-02
### React Starter Pack 下载使用与React初体验
* 新版的React没有演示文件，03-02是使用的`React 15.3.2`
* 03-02中有一些举例
* 在examples／basic／下index.html是一个事例可以研究一下,这个地方体现了React在页面上的高性能的优点
```javascript
var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';

    return React.DOM.p(null, message);
  }
});

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
var ExampleApplicationFactory = React.createFactory(ExampleApplication);

var start = new Date().getTime();
setInterval(function() {
  ReactDOM.render(
    ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
    document.getElementById('container')
  );
}, 50);
```

## 04-01
### NodeJS简介
* [Node.js®](https://nodejs.org/en/)是一个基于Chrome V8 JavaScript引擎构建的JavaScript运行时。 Node.js使用事件驱动的非阻塞I / O模型，使其轻便且高效。 Node.js的包生态系统，npm，是世界上最大的开源生态系统。
* NPM命令，NPMJS有强大的库，存放着各种必备的开源文件，日常所需的基本上都能通过它找到，并安装。——[NPM.JS](https://www.npmjs.com)
## 04-02
### NodeJS安装
* 如果想要稳定开发使用 LTS版
* 如果想要体验NodeJS新功能可以使用 Current版
* 建议使用 LTS版本，因为Current版本更新会删除之前的功能，使用前值得思考一下!!!!!
* `node -v` 检测一下自己Node的版本
* `npm -v`  检测一下自己NPM的版本

## 04-03（可选）
### NPM配置国内源
* 如果你不会翻墙，或者经常NPM装不上东西，可以试一下国内的NPM镜像
* 这是一个完整 `npmjs.org` 镜像，你可以用此代替官方版本(只读)，同步频率目前为 `10分钟` 一次以保证尽量与官方服务同步。
* 方法一,定制的 `cnpm` (gzip 压缩支持) 命令行工具代替默认的 `npm`
* `$ npm install -g cnpm --registry=https://registry.npm.taobao.org`
* 方法二,直接通过添加 `npm` 参数 `alias` 一个新命令:
```shell
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

# Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```
* 使用第一种方法`taobaoNPM`使用的时候写成`$ cnpm install [name]`，就可以安装了！！！
* 使用第二种方法`NPM`按照原来的方法`$ npm install [name]`就可以了！！！
* 如果想了解更多点击->[cnpm](http://blog.parryqiu.com/2016/08/18/ionic_installation)

## 05-01
### 使用NPM配置React
* 建立项目后，`cd`到项目目录，用`npm init`做项目的初始化，会在目录下产生一个`package.json`文件
* 然后开始安装React`$ sudo npm install --save react react-dom babelify babel-preset-react`
* 安装完后，项目之下就有了`node_modules`这个文件夹，这个文件夹存放着以后`NPM`安装的文件
* 下一步安装 `$ sudo npm install babel-preset-es2015 --save`
* 全部安装完毕后就会是像我这个`package.json`一样。
* 以下我使用的版本

```json
{
  "name": "05-01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-loader": "^7.0.0",
    "babel-preset-react": "^6.24.1",
    "babelify": "^7.3.0",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "webpack": "^2.5.1",
    "webpack-dev-server": "^2.4.5"
  }
}
```
* 在说热加载之前，先看一下我遇到过的问题，[React配置必踩坑](http://www.kejiganhuo.tech/?p=374)
--------------------------------------------------------------------------------
![error01](http://www.kejiganhuo.tech/wp-content/uploads/2017/06/error01-e1496323125786.png)
* 需要注意的 ---- NPM安装的时候最好`$ sudo npm install babel-loader –save`很多人无法后面webpack无法打包，就是因为没有安装babel加载器。
## 05-02
### WebPack 热加载配置(上)
* 创建index.html
```html
<div id="example">123</div>
<script src="bundle.js"></script>
```
* （这里会出现一个问题就是关于src中的bundle.js地址的问题，如果是使用`src/bundle.js`就会出现`webpack-server`无法更新的情况，我想原因是在与WebPack配置文件中我们定义了文件读取的绝对路径）
* 在项目目录下建立src文件，用于存放未编译的js与编译好的bundle.js
* 在src/js/目录下建立一个index.js用于存放未编译的js代码
```js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>hello world ！！</h1>,
  document.getElementById('example')
);
```
* 基本的文档就写好了，下一节是WebPack打包📦

## 05-03
### WebPack 热加载配置(中)
* 采用`WebPack2`进行打包
* `WebPack2`安装`sudo npm install -g webpack`
* `WebPack-dev-server`安装`sudo npm install -g webpack-dev-server`
* 全局安装完后进行项目目录下的安装！！！！（安装的时候最好在前面加上sudo，有时权限不够会安装失败）
```shell
$ sudo npm install  webpack --save
$ sudo npm install  webpack-dev-server --save
```
* 出现问题可以看[React配置必踩坑](http://www.kejiganhuo.tech/?p=374)！！！
* 在目录文件下建立一个`webpack.config.js`
* 很多参考都是采用`WebPack1`进行打包，对于`webpack2`更新后的讲解很少
* 不过还是可以通过官方文档，加上对`webpack1`的学习，自己还是琢磨出了`webpack2`如何配置，`\(^o^)/~`，如下
* **WebPack2配置信息**
```js
// webpack.config.js
var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, "src"),
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, "src"),
        filename: 'bundle.js' // 打包输出的文件
    },
    module: {
        rules: [{
            test: /\.js$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
            exclude: /(node_modules)/,
            use: [{
                  loader: 'babel-loader',
                  //配置参数;
                  options: { presets: ['es2015','react'] }
                }],
        }]
    },
};

```
#### 接下来运行WebPack打包
* 在Mac终端中，项目的根目录下，`webpack`进行打包，成功打包后会在src目录下生成bundle.js，在浏览器中查看
* 原本页面上的`123`覆盖成了`hello world ！！`

## 05-04
### WebPack 热加载配置(下)
#### webpack-dev-server的使用
* 不用每次都去用`WebPack`一遍
* `webpack -watch`自动监听编译，但是需要手动刷新浏览器
* 如果采用在Mac终端中项目根目录下`webpack-dev-server`这样可以`浏览器中`自动刷新，一边写代码，保存后自动刷新。
* （我发现在webpack2中`http://localhost:8080/`也可以自动加载不用`-hot`，不知道是不是自己的原因，有错误，请指出！！！）

## 05-05
### ChromeReact插件使用
* Chrome react插件 需要进行翻墙安装！！！
* 另外可以用FireFox进行代替，FireFox不用翻墙也可以安装此插件
* 测试一下这个工具，`src/js/index.js`如下：
```javascript
var React = require('react');
var ReactDOM = require('react-dom');

var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';

    return React.DOM.p(null, message);
  }
});

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
var ExampleApplicationFactory = React.createFactory(ExampleApplication);

var start = new Date().getTime();
setInterval(function() {
  ReactDOM.render(
    ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
    document.getElementById('example')
  );
}, 50);

```

* `index.html`如下
```html
<div id="example">123</div>
<script src="bundle.js"></script>
```

* 具体的效果如下
--------------------------------------------------------------------------------
![React-tools](http://www.kejiganhuo.tech/wp-content/uploads/2017/06/React-tools-e1496323191745.png)

## 06-01
### 开发工具 Atom
![ATOM](https://cloud.githubusercontent.com/assets/72919/2874231/3af1db48-d3dd-11e3-98dc-6066f8bc766f.png)
* ATOM.Github的地址[ATOM](https://github.com/atom/atom)
* ATOM[下载](https://atom.io)

## 06-02
### React开发相关Atom插件配置
* 在Packages中直接安装，这几个比较不错的插件！！！
* atom-ternjs
* atom-beautify
* open-in-browser
* emmet
* file-icons
* highlight-line
* highlight-selected

## 07-01
### React虚拟DOM概念
#### 虚拟DOM的结构
* 在传统的 Web 应用中，我们往往会把数据的变化实时地更新到用户界面中，于是每次数据的微小变动都会引起 DOM 树的重新渲染。如果当前 DOM 结构较为复杂，频繁的操作很可能会引发性能问题。React 为了解决这个问题，引入了虚拟 DOM 技术。
<p align="center"><img src="https://www.ibm.com/developerworks/cn/web/1509_dongyue_react/index6639.png" /></p>

* 虚拟 DOM 是一个 JavaScript 的树形结构，包含了 React 元素和模块。组件的 DOM 结构就是映射到对应的虚拟 DOM 上，React 通过渲染虚拟 DOM 到浏览器，使得用户界面得以显示。与此同时，React 在虚拟的 DOM 上实现了一个 diff 算法，当要更新组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以在 React 中，当页面发生变化时实际上不是真的渲染整个 DOM
* React 虚拟 DOM 中的诸多如 div 一类的标签与实际 DOM 中的 div 是相互独立的两个概念，它是一个纯粹的 JS 数据结构，它只是提供了一个与 DOM 类似的 Tag 和 API。React 会通过自身的逻辑和算法，转化为真正的 DOM 节点。也正是因为这样的结构，虚拟 DOM 的性能要比原生 DOM 快很多。

## 07-02
### React组件
* 组件是`React`的基石，所有的`React`应用程序都是基于组件的。
* 之前`React`组件，使用`React.createClass`来进行声明
```JavaScript
var List = React.createClass({
  getInitialState: function(){
    return['a','b','c']
  },
  render: function(){
    return(...);
  }
});
```
* `React`官方第一时间就支持了ES6 class 的方法，这种写法可读性更强，一个直观的表现就是不用写`getInitialState`方法了，可以直接在`constructor`里面定义`this.state`的值。所以以后代码采用以下格式。
```JavaScript
import React from 'react';

class List extends React.components{
  constructor(){
    super();
    this.state = ['a','b','c'];
  }
  render(){
    return(...);
  }
}
```
---

* 这一节里测试一下`React`的组件
* 在`src/js/`下创建文件夹`components`创建一个`header.js`
* `header.js`如下
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
export default class CompomentHeader extends React.Component{
  render(){
    return(
      <header>
      <h1>这里是表头</h1>
      </header>
    );
  }
}
```
* `index.js`如下
```JavaScript
var React = require('react');
var ReactDOM = require('react-dom');
import CompomentHeader from './components/header';

class Index extends React.Component {
  render() {
    return (
      <div>
      <CompomentHeader/>
      <h1>页面主题内容</h1>
      </div>
    );
  }
}

// 入口
ReactDOM.render( < Index / > , document.getElementById('example'));

```
#### HTML标签与React组件
* React可以直接渲染HTML类型的标签，也可以渲染React的组件
* HTML类型的标签第一个字母用小写来写表示。
```JavaScript
import React from 'react';
//当一个标签里面为空的时候，可以直接使用自闭和标签
//注意class是一个JavaScript保留字，所以如果class应该替换成className
let divElement = <div className="foo"/>;
//等同于
let divElement = React.createElement('div',{className:'foo'});
```
* React组件标签第一个字母大写。
```JavaScript
import React from 'react';
class Headline extends React.component{
  ...
  render(){
    //直接return JSX语法
    return <h1>Hello React</h1>
  }
}
let Headline = <Headline />;
let headline = React.createElement(Headline);
```
* `JSX`语法使用第一个字母大小写来区分是一个普通的`HTML`标签还是一个`React`组件
* 注意：因为`JSX`本身是`JavaScript`语法，所以一些`JavaScript`中的保留字要用其他的方式书写，比如第一个例子中`class`要写成`className`

## 07-03
### React多组件嵌套
* `webpack-dev-server`环境运行起来,这里主要是明白了React如何做嵌套
* `src/js/components`下创建`header.js`书写代码✍️
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
export default class CompomentHeader extends React.Component{
  render(){
    return(
      <header>
      <h1>这里是表头</h1>
      </header>
    )
  }
}
```
* `src/js/components`下创建`footer.js`书写代码✍️
```JavaScript
import React from 'react';
export default class CompomentFooter extends React.Component{
  render(){
    return(
      <footer>
      <h1>这里是尾部</h1>
      </footer>
    );
  }
}
```

## 07-04
### JSX内置表达式
#### JSX
* 在render方法中有一种直接把HTML嵌套在JS中的写法，它被称为JSX。这种写法类似XML，它可以定义HTML一样简洁的树状结构。这种语法结合了JavaScript和HTML的优点（我理解模版化我们编写的程序，这就是React的初衷）既可以像平常一样使用HTML，也可以在里面嵌套JavaScript语法，这种👬友好的格式，让开发者更易于阅读和开发。而且，对于组件来说，直接使用类似HTML的格式，也是非常合理的。但是，需要注意的是。JSX和HTML完全不是一回事，JSX只是作为编译器，把类似HTML的结构编译成JavaScript。
* JSX的注释是需要特别注意的，采用`{/*注释*/}`
#### JSX不是必须的
* JSX编译器把类似HTML的写法转换成原生的JavaScript方法，并且会将传入的属性转化为对应的对象。它就类似于一种语法糖，把标签类型的写法转换成`React`提供的一个用来创建 ReactElement 的方法
```JavaScript
const MyCompoment;
//input JSX,在JS中直接写成类似HTML的内容，前所未有的感觉，其实它返回的是一个ReactElement
let app = <h1 title="my title"> this is my title </h1>
//JSX转换后的结果
let app = React.createElement('h1',{title: 'my title'},'this is my title');
```

## 07-05
### 生命周期
* 每个生物😯都有它的生命周期，从出生🐣、少年、成年再到死亡。同理组件也有它特定的生命周期，React用不同的方法来描述它的整个生命周期。现在，要稍微修改一下组件的代码，当组件加载完毕1秒以后，使`like`的值自动加1
```JavaScript
...
componentDidMount(){
  setTimeout(()=>{
    this.likeCallback();
  },1000);
}
...
```
* `componentDidMount`这个方法就是在`render`完成并且组件装载完成之后调用的方法，所以界面中先显示为0，1秒以后此方法被调用，界面被重新渲染，`like`值变成了1
#### 1.组件首次加载
* `getDefaultProps`只会在装载之前调用一次，在组件中赋值的数据会被设置到`this.props`中。
* `getInitialState`只会在装载之前调用一次，这个函数的返回值会被设置到`this.state`中，需要注意的是，在ES6的写法，只需写在`constructor`中即可，如下
```JavaScript
class MyCompoment extends React.Component{
  constructor(props) {
    super(props);
    //在这里声明state
    this.state = {count: 0};
  }
}
```
* `componentWillMount`在render之前被调用，可以在渲染之前做一些准备工作。
* `render`这个方法是组件的一个必要方法。当这个方法被调用的时候，应返回一个`ReactElement`对象。`render`是一个纯函数，它的意义就是在给定相同的条件时，它的🔙返回结果应该每次都完全一致的。不应该有任何修改组件`state`的代码或者修改组件state 的代码或者是和浏览器交互的情况。
* `componentDidMount`只会在装载完成之后调用一次，在render之后调用，从这里开始获取组件的DOM结构。如果想让组件加载完毕后做一些额外的操作（比如AJAX请求等），可以在这个方法中添加相应代码。

---

<p align="center"><img src="http://www.kejiganhuo.tech/wp-content/uploads/2017/06/React生命周期.png" /></p>

* 探索`BodyIndex`的`componentWillMount`和`componentDidMount`生命周期
```JavaScript
import React from 'react';
export default class BodyIndex extends React.Component{
  componentWillMount(){
    //定义你的逻辑即可
    console.log("BodyIndex - componentWillMount");
  }

  componentDidMount(){
    console.log("BodyIndex - componentDidMount");
  }
  render(){
    ...
    return(
      ...
    )
  }
}

```
* 在浏览器的开发者工具中就可以看到`console`
* 再来查看Index的的`componentWillMount`和`componentDidMount`生命周期，`BodyIndex`包含在`Index`中
```JavaScript
var React = require('react');
var ReactDOM = require('react-dom');
import CompomentHeader from './components/header';
import CompomentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';
class Index extends React.Component {
  componentWillMount(){
    //定义你的逻辑即可
    console.log("Index - componentWillMount");
  }
  componentDidMount(){
    console.log("Index - componentDidMount");
  }
  render() {
    return (
      <div>
      <CompomentHeader/>
      <BodyIndex/>
      <CompomentFooter/>
      </div>
    )
  }
}

// 入口
ReactDOM.render( <Index /> , document.getElementById('example'));
```

* 在浏览器的开发者工具中就可以看到`console`,如下图

## 08-01
### State属性
#### state设计原则

#### state状态

## 08-02
### Props属性

## 08-03
### 事件与数据的双向绑定

## 08-04
### 可复用组件

## 08-05
### 组件Refs(操作DOM的二种方法)
* 第一种方式

```javascript
var mySubmitButton = document.getElementById('submitButton');
console.log(mySubmitButton);
ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
//不推荐此方法，有安全隐患，XSS攻击
```

* 第二种方法

```javascript
console.log(this.refs.submitButton);
this.refs.submitButton.style.color = 'red';
```
## 08-06
### 独立组件间共享 Mixins

# 知识扩展
## 00-01
### JSX的来历
* 下面是一段官方文档中的引用，它可以解释JSX这种写法诞生的初衷
`We strongly believe that components are the right way to separate concerns rather than "templates" and "display logic" . We think that markup and the code that generate it are intimately tied together . Additionally , display logic is often very complex and using template languages to express it becomes cumbersome`
* 多年以来，在传统的开发中，把模版和功能分离看作是最佳事件的完美例子，翻阅形形色色的框架文档，总有一个模版文件夹里放置了对应的模版文件，然后通过模版引擎处理这些字符，来生成把数据和模版结合起来的字符。而React认为世界是基于组件的，组件自然而然和模版相连，把逻辑和模版分开放置是一种笨重的思路，所以React创造了一种名为JSX的语法格式来架起它们之间的桥梁。
