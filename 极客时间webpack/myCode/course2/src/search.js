// document.write("search page")

"use strict";

import React from "react";
import ReactDOM from "react-dom";
import './search.less'
import img from "./images/1.jpg"

class Search extends React.Component {
  render() {
    return <div className="search-text">搜索文字的内容
      <img src={img} alt="" />
    </div>;
 
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
