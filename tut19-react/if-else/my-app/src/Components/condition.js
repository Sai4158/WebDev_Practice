import React, { Component } from "react";

class ElementVariablesExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  //if else
  //if this happens this will happen
  render() {
    let content;
    if (this.state.isLoggedIn) {
      content = <p>Welcome, User!</p>;
    } 
    else {
      content = <p>Please log in</p>;
    }

    return <div>{content}</div>;
  }
}

export default ElementVariablesExample;
