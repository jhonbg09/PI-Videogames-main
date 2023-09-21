import "./App.css";
import "./assets/normalize.css";
import NavBar from "./components/NavBar/NavBar";
import { Home, Detail, Landing, Form } from "./views";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    // hay varios metodos para devolver un componente.
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      {/* Uso esta manera para poder pasar props */}
      <Route path="/videogames" render={() => <Home />} />
      {/* si no necesito pasar props puedo utilizar este metodo */}
      <Route exact path="/" component={Landing} />
      <Route path="/detail" component={Detail} />
      <Route path="/form" component={Form} />
    </div>
  );
}

export default App;
