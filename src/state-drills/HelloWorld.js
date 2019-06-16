import React from "react";

class HelloWorld extends React.Component {
  static defaultProps = {
    who: "World"
  };
  constructor(props) {
    console.log("props in constructor", props);
    super(props);
    this.state = {
      who: this.props.who
    };
  }
  handleWorldClick = () => {
    this.props = {
      who: "World"
    };
    this.setState({ who: this.props.who });
  };
  handleReactClick = () => {
    this.props = {
      who: "React"
    };
    this.setState({ who: this.props.who });
  };
  handleFriendClick = () => {
    this.props = {
      who: "Friend"
    };
    this.setState({ who: this.props.who });
  };
  render() {
    console.log("rendered");
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.handleWorldClick}>World</button>
        <button onClick={this.handleReactClick}>React</button>
        <button onClick={this.handleFriendClick}>Friend</button>
      </div>
    );
  }
}

export default HelloWorld;
