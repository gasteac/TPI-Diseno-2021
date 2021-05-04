import "./App.css";
import Login from "./components/Login";
import AgenteInmobiliario from "./layout/usuariosLayout/AgenteInmobiliario/";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/agente-inmobiliario" component={AgenteInmobiliario} />
      </Switch>
    </Router>
  );
};

export default App;
