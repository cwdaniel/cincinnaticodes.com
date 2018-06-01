import React from "react";
import { Link, withRouter } from "react-router-dom";

class UiHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div>
          <h2>Cincinnati Codes</h2>
        </div>
        <div>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/">Calendar</Link>
            </li>
            <li className="menu-item">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export const Header = withRouter(UiHeader);
export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>© 2018 Cincinnati Codes</div>
      </footer>
    );
  }
}

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {
          this.props.children
          //<Well><p>Welcome to Cincinnati Codes, we are glad you've stopped by.</p></Well>
        }
      </div>
    );
  }
}
