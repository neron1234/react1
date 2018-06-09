import React from "react";
import { render } from "react-dom";

class Button extends React.Component {
  // state = { counter: 0 };

  handleClick = () => {
    this.props.onClickFunction(this.props.inctementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.inctementValue}</button>
    );
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

class App extends React.Component {
  state = { counter: 0 };

  inctementCounter = inctementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + inctementValue
    }));
  };

  render() {
    return (
      <div>
        <Button inctementValue={1} onClickFunction={this.inctementCounter} />
        <Button inctementValue={5} onClickFunction={this.inctementCounter} />
        <Button inctementValue={10} onClickFunction={this.inctementCounter} />
        <Button inctementValue={100} onClickFunction={this.inctementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
