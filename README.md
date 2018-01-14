# React新闻网站

![react](http://www.kejiganhuo.tech/wp-content/uploads/2017/06/bg2015033101.png)

# Ant Design样式框架使用
* [ANT DESIGH](http://ant.design/index-cn)
* 蚂蚁金服使用`$ npm install antd --save`
* 详细信息请查看官网

# 头条新闻的数据接口简介
* 采用Postman来管理接口
* [Postman](https://www.getpostman.com/apps)

# PC端页头组件开发
* 下载头部图标[ICONFINDER](https://www.iconfinder.com)
* 采用栅格与FLEX布局
* 头部组件采用`Menu`控件，子元素为`Menu.Item`

# 移动端页头组件开发
* 移动端响应式布局，采用`react-response`，`npm`一下。
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MBIndex from './components/mb_index';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
          <MBIndex />
        </MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(
  <Root/>, document.getElementById('mainContainer'));

```
* 在`index.html`中记得书写✍️`meta标签`，帮助识别响应式布局
```HTML
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
```

# PC端页脚开发
* 在`pc_footer.js`中写入代码,填写相应的
```JavaScript
import React from 'react';
import {Row,Col} from 'antd';
export default class PCFooter extends React.Component {
  render(){
    return(
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            &copy;&nbsp;2016 ReactNews. All Right Reserved.
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    )
  }
}
```

# 移动端页脚组件开发
* 在`mb_footer.js`中写入代码
```JavaScript
import React from 'react';
import {Row,Col} from 'antd';
export default class MBFooter extends React.Component {
  render(){
    return(
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            &copy;&nbsp;2016 ReactNews. All Right Reserved.
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    )
  }
}
```

# 注册功能模块

* 采用`fech`框架进行开发
* `npm install fech`
