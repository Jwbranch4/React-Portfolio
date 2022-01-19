import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";

function App() {
  return (
    <div>
      <main>
        <Header> </Header>

        <About></About>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
