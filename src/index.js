import React from "react";
import { render } from "react-dom";
import "./button.css";
import "./index.css";
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
    return (
      <header className="header">
        <div>
          <h2>Cincinnati Codes</h2>
        </div>{" "}
        <div>Home</div>
      </header>
    );
  }
}
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>© 2018 Cincinnati Codes</div>
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Well>
            <p>Welcome to Cincinnati Codes, we are glad you've stopped by.</p>
          </Well>
        </div>
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
