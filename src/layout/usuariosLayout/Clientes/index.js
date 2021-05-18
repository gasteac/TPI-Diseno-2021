import React  from "react";
import Layout from "../../Layout";
import Container from "./components/Container";
import Buscador from "./components/Buscador";
import Fondo from "../../../static/images/casitablur.jpg";
import useAuth from "../../../hooks/useAuth";

const Clientes = ({history}) => {
  // eslint-disable-next-line
  const user = useAuth(history)
  document.querySelector("body").style.background = `url(${Fondo})`;
  document.querySelector('body').style.backgroundSize = `cover`
  return (
    <Layout
      cliente={true}
    >
      <Container style={{display:'flex', alignItems:'center'}}>
        <Buscador />
      </Container>
    </Layout>
  );
};

export default Clientes;
