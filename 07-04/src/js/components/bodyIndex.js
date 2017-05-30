import React from 'react';
export default class BodyIndex extends React.Component{
  render(){

    var userName = 'Parry ';
    var boolInput = true;
    var html = "IMOOC\u0020LESSION";//unicode转换

    //comments

    return(
      <div>
      <h2>页面主题内容</h2>
      <p>{userName=='' ? '用户还没有登陆' : '用户名：' + userName}</p>
      <p><input type = 'button' value = '默认按钮' disabled = {boolInput}/></p>
      {/*注释*/}
      <p>{html}</p>{/*需要进行Unicode转码*/}
      {/*容易遭受xss攻击*/}
      <p dangerouslySetInnerHTML={{__html: html}}></p>
      </div>
    )
  }
}
