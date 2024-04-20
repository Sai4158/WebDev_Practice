import React from "react";

//this is class component
class counter extends React.Component {
  //this is a method
  constructor(props) {
    //this is passing the properties to the parent class
    super(props);
    this.state = { count: 0 };
  }

  //arrow function
  handleClick = () => {
    this.setState({ count: this.setstate.count + 1 });
  };

  //render off =  return value

  render() {
    return (
      <div>
        <p>you clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

//must do this for everu
export default counter;
