import React from "react";
import { render } from "react-dom";
import "./button.css";

class Well extends React.Component {
  render() {
    let content = this.props.children;
    let wellType = this.props.wellType ? this.props.wellType : "well";
    return (
      <div
        style={{
          background: "#eee",
          padding: 20 + "px",
          border: "1px #eee solid",
          borderRadius: 10 + "px"
        }}
        className={wellType}
      >
        {this.props.children}
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    let buttonTile = this.props.buttonTile;
    let buttonColor = this.props.buttonColor;
    let onClick = this.props.click;
    return (
      <button className={`button `} onClick={() => onClick()}>
        {buttonTile}
      </button>
    );
  }
}
class Header extends React.Component {
  render() {
    return <header />;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Well>
          <p>Welcome</p>
        </Well>
        <Button buttonTile="Click Me" click={() => alert("test")} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
