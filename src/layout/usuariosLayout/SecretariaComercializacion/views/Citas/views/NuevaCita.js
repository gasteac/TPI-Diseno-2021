import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import useAuth from '../../../../../../hooks/useAuth'
import Layout from '../../../../../Layout'

const NuevaCita = ({history}) => {
    const user = useAuth(history)
    return (
        <Layout>
            <Container fluid>
                ola
            </Container>
        </Layout>
    )
}

export default NuevaCita
