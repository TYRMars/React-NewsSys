import React from 'react';

//var footerCss = require("../../css/footer.css");

var footerConverStyle = {
  "miniFooter": {
    "background": "#333333",
    "color": "#ffffff",
    "paddingLeft": "20px",
    "paddingTop": "3px",
    "paddingBottom": "3px"
  },
  "miniFooter_h1": {
    "fontSize": "15px"
  }
}

export default class CompomentFooter extends React.Component {
  render() {
    return (
      <footer style={footerConverStyle.miniFooter}>
        <h1 style={footerConverStyle.miniFooter_h1}>这里是尾部</h1>
      </footer>
    );
  }
}
