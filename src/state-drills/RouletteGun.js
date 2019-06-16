import React from "react";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningChamber: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleButtonClick = () => {
    this.setState({ spinningChamber: true });
    this.timeout = setTimeout(() => {
      const randomChamber = Math.floor(Math.random() * 9);
      this.setState({
        chamber: randomChamber,
        spinningChamber: false
      });
    }, 2000);
  };

  renderDisplay() {
    const { chamber, spinningChamber } = this.state;
    const { bulletInChamber } = this.props;
    if (spinningChamber) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (chamber === bulletInChamber) {
      return "BANG!!!!!";
    } else {
      return "you're safe!";
    }
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
