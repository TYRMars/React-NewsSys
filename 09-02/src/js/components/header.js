import React from 'react';
export default class CompomentHeader extends React.Component{

  constructor(){
    super();
    this.state ={
      miniHeader:false //默认加载的时候还是高（不是mini）的头部
    };
  };

  switchHeader(){
    this.setState({
      miniHeader: !this.state.miniHeader //对state进行取反
    });
  };

  render(){
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#ffffff",
        "padding-top": (this.state.miniHeader) ? "3px" : "15px",
        paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
      },
      //还可以定义其他的样式
    };
    return(
      <header style={styleComponentHeader.header} className="smallFintSize" onClick={this.switchHeader.bind(this)}>
        <h1>这里是表头</h1>
      </header>
    )
  }
}
