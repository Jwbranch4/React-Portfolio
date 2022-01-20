import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header> </Header>
        <main>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
