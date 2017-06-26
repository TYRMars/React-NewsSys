import React from 'react';
import MBHeader from './mb_header';
import MBFooter from './mb_header';

export default class MBIndex extends React.Component {
  render(){
    return(
      <div>
        <MBHeader></MBHeader>
        <MBFooter></MBFooter>
      </div>
    );
  };
}
