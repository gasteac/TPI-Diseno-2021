import "./App.css";
import Login from "./components/Login";
import AgenteInmobiliario from "./layout/usuariosLayout/AgenteInmobiliario/";
import Agenda from "./layout/usuariosLayout/AgenteInmobiliario/views/Agenda";
import Propiedades from "./layout/usuariosLayout/AgenteInmobiliario/views/Propiedades";

import Clientes from './layout/usuariosLayout/Clientes/';
import QuienesSomos from "./layout/usuariosLayout/Clientes/views/QuienesSomos";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/agente-inmobiliario/inicio" component={AgenteInmobiliario} />
        <Route exact path="/agente-inmobiliario/Agenda" component={Agenda} />
        <Route exact path="/agente-inmobiliario/Propiedades" component={Propiedades} />

        { /* Clientes */}
        <Route exact path="/clientes/inicio" component={Clientes} />
        <Route exact path="/clientes/quienessomos" component={QuienesSomos} />

        
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
};

export default App;
