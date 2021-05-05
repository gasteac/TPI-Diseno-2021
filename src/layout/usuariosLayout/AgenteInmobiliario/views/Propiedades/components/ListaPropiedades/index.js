import { useState } from "react";
import Filter from "./components/Filter";


export default function ListaPropiedades({ propiedades }) {

    const [nombre, setNombre] = useState('');
    const [precioMayor, setPrecioMayor] = useState(0);
    const [precioMenor, setPrecioMenor] = useState(0);
    const [tipo, setTipo] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [habitaciones, setHabitaciones] = useState(0);
    const [baños, setBaños] = useState('');
    const [m2TotalesMayor, setM2TotalesMayor] = useState(0);
    const [m2TotalesMenor, setM2TotalesMenor] = useState(0);

    const propiedadesFiltradas = propiedades.filter(propiedad => 
            (/*(propiedad.nombre.includes(nombre)) && */
            (propiedad.precio < precioMayor && propiedad.precio > precioMenor) &&
            //(tipo === propiedad.tipo) && 
            // (propiedad.ubicacion.includes(ubicacion)) && 
            // (habitaciones === propiedad.habitaciones) && 
            // (baños === propiedad.baños) && 
            (propiedad.m2totales < m2TotalesMayor && propiedad.m2totales > m2TotalesMenor)
            )
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
        </div>
    );
}