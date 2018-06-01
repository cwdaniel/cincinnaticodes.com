import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeComponent } from "./components/pages/Home";
import { AboutComponent } from "./components/pages/About";
import { CalendarComponent } from "./components/pages/Calendar";
import { ContactComponent } from "./components/pages/Contact";
import { ComingSoon } from "./components/pages/ComingSoon";
import { Header, Content, Footer } from "./components/layout";
import "./button.css";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Content>
            <Switch>
              <Route path="/" exact={true} component={ComingSoon} />
              <Route path="/home" exact={true} component={HomeComponent} />
              <Route path="/about" exact={true} component={AboutComponent} />
              <Route path="/calendar" component={CalendarComponent} />
              <Route path="/contact" component={ContactComponent} />
            </Switch>
          </Content>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
