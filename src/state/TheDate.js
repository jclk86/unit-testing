import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props); // referencing the parent React.component blueprint/constructor
    this.state = {
      datetime: new Date(),
      greet: "hi"
    }; // see state in react dev tools on <TheDate>, not in its nested/child element
  }
  componentDidMount() {
    console.log("ComponentDidMount");
    this.interval = setInterval(() => {
      //this.interval creates a new method in TheDate. Simply adding a method to override the current object datetime props value every second
      this.setState({ datetime: new Date() }); // referencing a react method setState. setState merges dateTime: new Date() with current verison
    }, 1000); // needs timer because no guarantee setState will run immediately.
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    console.log("render");
    return <div>{this.state.datetime.toLocaleString()}</div>; // toLocaleString is method specifically to change date to string.
  }
}

export default TheDate;
