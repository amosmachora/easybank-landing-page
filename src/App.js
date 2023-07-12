import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Body />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
