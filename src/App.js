import "./App.css";
import Login from "./components/Login";
import AgenteInmobiliario from "./layout/usuariosLayout/AgenteInmobiliario/";
import Clientes from './layout/usuariosLayout/Clientes/';
import Agenda from "./layout/usuariosLayout/AgenteInmobiliario/views/Agenda";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/agente-inmobiliario/inicio" component={AgenteInmobiliario} />
        <Route exact path="/agente-inmobiliario/agenda" component={Agenda} />
        <Route exact path="/clientes/inicio" component={Clientes} />
        
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
};

export default App;
