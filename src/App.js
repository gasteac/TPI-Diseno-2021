import "./App.css";
import Login from "./components/Login";
import AgenteInmobiliario from "./layout/usuariosLayout/AgenteInmobiliario/";
import Agenda from "./layout/usuariosLayout/AgenteInmobiliario/views/Agenda";
import Propiedades from "./layout/usuariosLayout/AgenteInmobiliario/views/Propiedades";
import ListaClientes from "./layout/usuariosLayout/AgenteInmobiliario/views/Clientes/";

import Clientes from "./layout/usuariosLayout/Clientes/";
import QuienesSomos from "./layout/usuariosLayout/Clientes/views/QuienesSomos/";
import PropiedadesClientes from "./layout/usuariosLayout/Clientes/views/Propiedades/PropiedadesClientes";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ProgramarCitaCliente from "./layout/usuariosLayout/Clientes/views/ProgramarCita";
import GlobalState from "./context/globalState";
import AgregarPropiedad from "./layout/usuariosLayout/AgenteInmobiliario/views/Propiedades/AgregarPropiedad/AgregarPropiedad";
import Propiedad from "./components/Propiedad";
import EditarPropiedad from "./layout/usuariosLayout/AgenteInmobiliario/views/Propiedades/EditarPropiedad/EditarPropiedad";
import SecretariaComercializacion from "./layout/usuariosLayout/SecretariaComercializacion";
import Citas from "./layout/usuariosLayout/SecretariaComercializacion/views/Citas";

const App = () => {
  return (
    <GlobalState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/agenteinmobiliario/inicio"
            component={AgenteInmobiliario}
          />
          <Route exact path="/agenteinmobiliario/Agenda" component={Agenda} />
          <Route
            exact
            path="/agenteinmobiliario/Propiedades"
            component={Propiedades}
          />
          <Route
            exact
            path="/agenteinmobiliario/propiedades/agregarpropiedad"
            component={AgregarPropiedad}
          />
          <Route
            exact
            path="/agenteinmobiliario/propiedades/editarpropiedad"
            component={EditarPropiedad}
          />
          <Route
            exact
            path="/agenteinmobiliario/Clientes"
            component={ListaClientes}
          />

          {/* Cliente-Agente */}
          <Route
            exact
            path="/propiedades/propiedad"
            component={Propiedad}
          />

          {/* Clientes */}
          <Route exact path="/cliente/inicio" component={Clientes} />
          <Route
            exact
            path="/cliente/propiedades"
            component={PropiedadesClientes}
          />
          <Route
            exact
            path="/cliente/programarcita"
            component={ProgramarCitaCliente}
          />
          <Route exact path="/cliente/quienessomos" component={QuienesSomos} />

          {/* SecretariaComercializacion */}
          <Route
            exact
            path="/secretariacomercializacion/inicio"
            component={SecretariaComercializacion}
          />
          <Route
            exact
            path="/secretariacomercializacion/citas"
            component={Citas}
          />

          <Redirect to="/" />
        </Switch>
      </Router>
    </GlobalState>
  );
};

export default App;
