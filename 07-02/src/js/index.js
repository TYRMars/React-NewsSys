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

    )
  }
}

// 入口
ReactDOM.render( < Index / > , document.getElementById('example'));
