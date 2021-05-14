import "./App.css";
import Login from "./components/Login";
import AgenteInmobiliario from "./layout/usuariosLayout/AgenteInmobiliario/";
import Agenda from "./layout/usuariosLayout/AgenteInmobiliario/views/Agenda";
import Propiedades from "./layout/usuariosLayout/AgenteInmobiliario/views/Propiedades";
import ListaClientes from "./layout/usuariosLayout/AgenteInmobiliario/views/Clientes/";

import GlobalState from "./context/globalState";
import PropiedadesState from "./context/contextPropiedades/propiedadesState";

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
import AgregarPropiedad from "./layout/usuariosLayout/AgenteInmobiliario/views/Propiedades/AgregarPropiedad/AgregarPropiedad";
import EditarPropiedad from "./layout/usuariosLayout/AgenteInmobiliario/views/Propiedades/EditarPropiedad/EditarPropiedad";
import Propiedad from "./components/Propiedad";
import SecretariaComercializacion from "./layout/usuariosLayout/SecretariaComercializacion";
import Citas from "./layout/usuariosLayout/SecretariaComercializacion/views/Citas";
import AgendaSec from "./layout/usuariosLayout/SecretariaComercializacion/views/AgendaSec";
import Cajera from "./layout/usuariosLayout/Cajera";
import PagoVenta from "./layout/usuariosLayout/Cajera/views/PagoVenta/PagoVenta";
import PagoAlquiler from "./layout/usuariosLayout/Cajera/views/PagoAlquiler";
import EntradaSalida from "./layout/usuariosLayout/Cajera/views/EntradaSalida/EntradaSalida";
import Transacciones from "./layout/usuariosLayout/Cajera/views/TransaccionesRealizadas/TransaccionesRealizadas";
import CierreDeCaja from "./layout/usuariosLayout/Cajera/views/CierreDeCaja";
import AgregarClienteCorporativo from "./layout/usuariosLayout/AgenteInmobiliario/views/Clientes/agregarCliente/AgregarClienteCorporativo";
import AgregarClientePropietario from "./layout/usuariosLayout/AgenteInmobiliario/views/Clientes/agregarCliente/AgregarClientePropietario";

const App = () => {
  return (
    <GlobalState>
      <PropiedadesState>
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
              path="/agenteinmobiliario/Clientes"
              component={ListaClientes}
            />
            <Route
              exact
              path="/agenteinmobiliario/Clientes/AgregarClienteCorporativo"
              component={AgregarClienteCorporativo}
            />
            <Route
              exact
              path="/agenteinmobiliario/Clientes/AgregarClientePropietario"
              component={AgregarClientePropietario}
            />
            <Route
              exact
              path="/agenteinmobiliario/propiedades/editarpropiedad"
              component={EditarPropiedad}
            />

            {/* CLiente-Agente */}
            <Route exact path="/propiedades/propiedad" component={Propiedad} />

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
            <Route
              exact
              path="/cliente/quienessomos"
              component={QuienesSomos}
            />

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
            <Route
              exact
              path="/secretariacomercializacion/agenda"
              component={AgendaSec}
            />

            {/* Cajera */}
            <Route exact path="/cajera/inicio" component={Cajera} />
            <Route exact path="/cajera/pagoventa" component={PagoVenta} />
            <Route exact path="/cajera/pagoalquiler" component={PagoAlquiler} />
            <Route
              exact path="/cajera/EntradaSalida"
              component={EntradaSalida}
            />
            <Route
              exact
              path="/cajera/transacciones"
              component={Transacciones}
            />
            <Route exact path="/cajera/cierredecaja" component={CierreDeCaja} />

            {/* <Redirect to="/" /> */}
          </Switch>
        </Router>
      </PropiedadesState>
    </GlobalState>
  );
};

export default App;
