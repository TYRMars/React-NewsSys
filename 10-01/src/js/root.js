import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import CompomentList from './components/list';
import {Route,BrowserRouter,Switch} from 'react-router-dom';

export default class Root extends React.Component{
  render(){
    return(
      //这里替换了之前的Index，变成了程序的入口
      <BrowserRouter>
        <Switch>
          <Route component={index} path="/"></Route>
          <Route component={CompomentList} path="list"></Route>
        </Switch>
      </BrowserRouter>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('example'));
