var React = require('react');
var ReactDOM = require('react-dom');
import CompomentHeader from './components/header';
import CompomentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import 'antd/dist/antd.css';
class Index extends React.Component {

  componentWillMount(){
    //定义你的逻辑即可
    console.log("Index - componentWillMount");
  }

  componentDidMount(){
    console.log("Index - componentDidMount");
  }

  render() {
    // var components;
    // if (!denglu) {
    //   components = <CompomentLoginHeader/>;
    // } else {
    //   components = <CompomentHeader/>;
    // }
    return (
      <div>
      <CompomentHeader/>
      <BodyIndex userid={123456}/>
      <CompomentFooter/>
      </div>
    )
  }
}

// 入口
ReactDOM.render( < Index / > , document.getElementById('example'));
