import "./App.css";
import Header from "./components/Header";
import PokeCard from "./components/PokeCard";
import PokeDetails from "./components/PokeDetails";
import Pokerealm from "./components/Pokerealm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokerealm/>}></Route>
        <Route path="/details/:pokemonName/:id" element={<PokeDetails/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
