import { useState } from "react";
import Filter from "./components/Filter";
import Propiedades from "./components/Propiedades";


export default function ListaPropiedades({ propiedades }) {

    const [nombre, setNombre] = useState('');
    const [precioMayor, setPrecioMayor] = useState(0);
    const [precioMenor, setPrecioMenor] = useState(0);
    const [tipo, setTipo] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [habitaciones, setHabitaciones] = useState(0);
    const [baños, setBaños] = useState(0);
    const [m2TotalesMayor, setM2TotalesMayor] = useState(0);
    const [m2TotalesMenor, setM2TotalesMenor] = useState(0);

    const propiedadesFiltradas = propiedades.filter(propiedad => { 

        const nombreBool = propiedad.nombre.toLowerCase().includes(nombre.toLowerCase()) || (nombre.length === 0);
        const precioBool = (propiedad.precio < precioMayor && propiedad.precio > precioMenor);
        const tipoBool = (tipo === propiedad.tipo) || (tipo.length === 0)
        const ubicacionBool = (propiedad.ubicacion.toLowerCase().includes(ubicacion.toLowerCase())) || (ubicacion.length === 0);
        const habitacionesBool = (Number(habitaciones) === propiedad.habitaciones) || (Number(habitaciones) === 0);
        const bañosBool = (Number(baños) === propiedad.baños) || (Number(baños) === 0);
        const m2Bool = (propiedad.m2totales < m2TotalesMayor && propiedad.m2totales > m2TotalesMenor);
        
        return (nombreBool &&
        precioBool &&
        tipoBool && 
        ubicacionBool && 
        habitacionesBool && 
        bañosBool && 
        m2Bool)}
    )

    return (
        <div>
            <Filter setNombre={setNombre} 
            setPrecioMayor={setPrecioMayor} 
            setPrecioMenor={setPrecioMenor} 
            setTipo={setTipo} 
            setUbicacion={setUbicacion} 
            setHabitaciones={setHabitaciones} 
            setBaños={setBaños} 
            setM2TotalesMayor={setM2TotalesMayor}
            setM2TotalesMenor={setM2TotalesMenor}/>
            <button onClick={() => console.log(propiedadesFiltradas)}>Prueba</button>
            <Propiedades propiedades={propiedadesFiltradas}/>
        </div>
    );
}