import React from "react";
import ReactDOM from "react-dom";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 // the conditional will be applied to here
    };
  }
  renderTickTockBoom = () => {
    let count = this.state.count;
    if (count > 8) {
      clearInterval(this.interval);
      return "BOOM!!!";
    } else if (count % 2 === 0) {
      return "tick";
    } else if (count % 2 !== 0) {
      return "tock";
    }
  };
  componentDidMount() {
    console.log("Component did mount");
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("Unmounted");
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <p>{this.renderTickTockBoom()}</p>
      </div>
    );
  }
}

export default Bomb;
