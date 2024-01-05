import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [races, setRaces] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/doguinhos")
      .then((response) => response.json())
      .then((data) => {
        setRaces(data);
      });
  }, []);

  useEffect(() => {
    if (search && search.length > 3) {
      fetch(`http://localhost:8080/doguinhos?name=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setRaces(data);
        });
    }
  }, [search]);

  return (
    <div className="App">
      <h1>Bem-vindo aos doguinhos!</h1>
      <h4>Confira abaixo uma lista de raças dos doguinhos</h4>
      <input
        placeholder="Buscar por raças"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul>
        {races.map((race) => (
          <li key={race.name}>{race.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
