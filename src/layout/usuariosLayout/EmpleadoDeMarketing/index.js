import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Layout from "../../Layout";

const EmpleadoDeMarketing = ({ history }) => {
  const user = useAuth(history);
  return (
    <Layout usuario={user}>
      <Container className="mt-3 flex-column ">
        ola
      </Container>
    </Layout>
  );
};

export default EmpleadoDeMarketing;
