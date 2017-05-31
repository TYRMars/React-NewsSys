import React from 'react';
import BodyChild from './bodychild'

const defaultProps = {
  username:'这是一个默认的用户名'//默认属性设置
};

export default class BodyIndex extends React.Component {
  constructor() {
    super(); //调用基类的所有的初始化方法
    this.state = {
      username: "Parry",
      age:20
    };//初始化赋值
  }

  handleChildValueChange(event){
    this.setState({age:event.target.value})
  }

  changeUserInfo(){
    this.setState({age:50});
  };

  render() {

    // setTimeout(() => {
    //   //更改state的时候
    //   this.setState({username: "IMOOC",age:30})
    // }, 4000);

    return (
      <div>
        <h2>页面主题内容</h2>
        <p>接收到的父页面属性：userid: {this.props.userid} username: {this.props.username}</p>
        <p>age: {this.state.age}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)}/>
        <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>{/*传参数到孙子节点*/}
      </div>
    )
  }
}

BodyIndex.propTypes = {
  userid: React.PropTypes.number
};

BodyIndex.defaultProps = defaultProps;
