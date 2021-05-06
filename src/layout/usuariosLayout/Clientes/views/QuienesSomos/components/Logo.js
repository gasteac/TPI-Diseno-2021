import React from 'react'
import { Image, Jumbotron } from 'react-bootstrap'
import Logo from '../../../../../../static/images/inmoviliaria-1.svg'

const LogoJumbotron = () => {
    return (
        <Jumbotron style={{background: "rgba(43,56,96,.7)", minHeight: "100%"}} className="text-center d-grid justify-content-center text-white">
            <Image src={Logo} style={{minWidth: "55%"}} />
            <h3>Sercicios Inmobiliarios</h3>
            <p>Tel: 3794 895939</p>
            <p>Mail: domus@gmail.com</p>
        </Jumbotron>
    )
}

export default LogoJumbotron
