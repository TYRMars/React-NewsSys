import React from 'react';
export default class CompomentHeader extends React.Component{

  render(){
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#ffffff",
        "padding-top": "15px",
        paddingBottom: "15px"
      }
      //还可以定义其他的样式
    }
    return(
      <header style={styleComponentHeader.header} className="smallFintSize">
        <h1>这里是表头</h1>
      </header>
    )
  }
}
