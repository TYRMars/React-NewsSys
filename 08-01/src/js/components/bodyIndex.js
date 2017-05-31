import React from 'react';
export default class BodyIndex extends React.Component {
  constructor() {
    super(); //调用基类的所有的初始化方法
    this.state = {
      username: "Parry",
      age:20
    };//初始化赋值
  }
  render() {
    setTimeout(() => {
      //更改state的时候
      this.setState({username: "IMOOC",age:30})
    }, 4000);

    return (
      <div>
        <h2>页面主题内容</h2>
        <p>{this.state.username} {this.state.age}</p>
      </div>
    )
  }
}
