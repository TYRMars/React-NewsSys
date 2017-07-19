import React from 'react';


export default class MBHeader extends React.Component {
  render(){
    return(
      <div id="mbheader">
        <header>
          <img src="./src/images/news.svg" alt="logo"/>
          <span>
            ReactNews
          </span>
        </header>
      </div>
    );
  };
}
