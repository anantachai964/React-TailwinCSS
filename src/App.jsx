import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Card from "./components/Card";
import How from "./components/How";


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <Card />
      <How />
    </>
  );
}

export default App;
