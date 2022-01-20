import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename={"/React-Portfolio/"}>
        <div>
          <Header> </Header>
          <main>
            <Switch>
              <Route path="/" component={About} />
              <Route path="/projects" component={Project} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
