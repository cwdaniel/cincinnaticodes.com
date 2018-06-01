import React from "react";

export class Well extends React.Component {
  render() {
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

export class Button extends React.Component {
  render() {
    let buttonTile = this.props.buttonTile;
    let onClick = this.props.click;
    return (
      <button className={`button `} onClick={() => onClick()}>
        {buttonTile}
      </button>
    );
  }
}
