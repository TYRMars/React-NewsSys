var React = require('react');
var ReactDOM = require('react-dom');
import CompomentHeader from './components/header';
import html2canvas from './components/html2canvas'
class Index extends React.Component {
  clickCanvas(){
    html2canvas(document.body, {onrendered: function(canvas) {
      document.body.appendChild(canvas);
    },
    width: 300,
    height: 300,
    useCORS: true
  });
  }
  render() {
    return (
      <div>
      <CompomentHeader/>
      <h1>页面主题内容</h1>
      <button  onClick={ () => this.clickCanvas() } >加载</button>
      <img src="http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=88125b124136acaf4ded9ebf14b0e765/2fdda3cc7cd98d104214141a2b3fb80e7aec90dc.jpg"/>
      </div>
    );
  }
}

// 入口
ReactDOM.render( < Index / > , document.getElementById('example'));
