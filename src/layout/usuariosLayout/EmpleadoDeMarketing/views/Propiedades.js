import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BackButton from '../../../../components/BackButton';
import ListaPropiedades from '../../../../components/ListaPropiedades';
import useAuth from '../../../../hooks/useAuth';
import Layout from '../../../Layout';

const PropiedadesMarketing = ({history}) => {
    const user = useAuth(history);
    return (
        <Layout usuario={user}>
        <Container className="mt-3 flex-column ">
          <Row>
            <Col xs={4}>
              <BackButton history={history} />
            </Col>
            <Col xs={4}>
              <h2 className="titulosSecciones m-auto">Propiedades</h2>
            </Col>
          </Row>
          <Row>
            <ListaPropiedades history={history} />
          </Row>
        </Container>
      </Layout>
    )
}

export default PropiedadesMarketing
