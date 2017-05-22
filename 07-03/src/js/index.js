var React = require('react');
var ReactDOM = require('react-dom');
import CompomentHeader from './components/header';
import CompomentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';
class Index extends React.Component {
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
      <BodyIndex/>
      <CompomentFooter/>
      </div>
    )
  }
}

// 入口
ReactDOM.render( < Index / > , document.getElementById('example'));
