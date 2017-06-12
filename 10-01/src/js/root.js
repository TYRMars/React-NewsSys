import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import CompomentList from './components/list';
import {Router,Route,hashHistory} from ‘react-router’;

export default class Root extends React.Component{
  render(){
    return(
      //这里替换了之前的Index，变成了程序的入口
      <Router history={hashHistory}>
        <Route component={index} path="/"></Route>
        <Route component={CompomentList} path="list"></Route>
      </Router>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('example'));
