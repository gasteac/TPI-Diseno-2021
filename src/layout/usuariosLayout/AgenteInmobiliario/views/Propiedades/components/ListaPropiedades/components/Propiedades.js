import PropiedadImg from "./../../../../../../../../static/images/Propiedad.svg";
import Avatar from "./../../../../../../../../static/images/Avatar.svg";
import './Propiedades.css';

export default function Propiedades({ propiedades }) {

    const codPropiedades = propiedades.map(propiedad => (
        <div key={propiedad.id} className='card'>
            <img src={PropiedadImg} alt='imagen propiedad' />
            <div>
                <h5>{propiedad.nombre}, {propiedad.ubicacion}</h5>
                <p>{propiedad.precio} USD</p>
                <div className='desc'>
                    <div className='desc1'>
                        <p>{propiedad.m2totales} m2totales</p>
                        <p>{propiedad.habitaciones}</p>
                    </div>
                    <div className='desc1'>
                        <p>{propiedad.tipo}</p>
                        <p>{propiedad.baños}</p>
                    </div>
                    <img src={Avatar} alt='profile'/>
                </div>
            </div>
        </div>
    ))

    return (
        <div className='cards'>
        {codPropiedades}
        </div>
    );
}