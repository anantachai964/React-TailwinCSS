import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Card from "./components/Card";
import How from "./components/How";
import Helping from "./components/Helping";
import Unseen from "./components/Unseen";

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <Card />
      <Unseen />
      <Helping />
      <How />
    </>
  );
}

export default App;
