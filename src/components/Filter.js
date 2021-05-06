import { useEffect, useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function Filter({ setNombre, setPrecioMayor, setPrecioMenor, setTipo, setUbicacion, setHabitaciones, setBaños, setM2TotalesMayor, setM2TotalesMenor }) {

    const [valor, setValor] = useState({min: 50000, max: 500000});
    const [m2, setM2] = useState({min: 10, max: 600});

    useEffect(() => {
        setPrecioMayor(valor.max);
        setPrecioMenor(valor.min);
        setM2TotalesMayor(m2.max);
        setM2TotalesMenor(m2.min);
    }, [])

    return (
        <div>
            <h3>Nombre</h3>
            <input type='text' onChange={e => {setNombre(e.target.value)}}/>
            <h3>Precio</h3>
            <InputRange maxValue={500000} minValue={50000} value={valor} onChange={valor => {setValor(valor); 
                                                                                            setPrecioMayor(valor.max);
                                                                                            setPrecioMenor(valor.min)}}/>
            <div>
                <h3>Tipo</h3>
                <input type='radio' name='tipo' id='cabaña' value='cabaña' onClick={e => {setTipo(e.target.value)}}/>
                <label for='cabaña'>Cabaña</label>
                <input type='radio' name='tipo' id='casa-con-local' value='casa-con-local' onClick={e => {setTipo(e.target.value)}} />
                <label for='casa-con-local'>Casa con local</label>
                <input type='radio' name='tipo' id='chalet' value='chalet' onClick={e => {setTipo(e.target.value)}} />
                <label for='chalet'>Chalet</label>
                <input type='radio' name='tipo' id='cochera' value='cochera' onClick={e => {setTipo(e.target.value)}} />
                <label for='cochera'>Cochera</label>
                <input type='radio' name='tipo' id='departamento' value='departamento' onClick={e => {setTipo(e.target.value)}} />
                <label for='departamento'>Departamento</label>
                <input type='radio' name='tipo' id='local' value='local' onClick={e => {setTipo(e.target.value)}} />
                <label for='local'>Local</label>
            </div>
            <h3>Ubicación</h3>
            <input type='text' placeholder='Donde quieres mudarte?' onChange={e => setUbicacion(e.target.value)}/>
            <h3>Habitaciones</h3>
            <input type='number' onChange={e => setHabitaciones(e.target.value)}/>
            <h3>Baños</h3>
            <input type='number' onChange={e => setBaños(e.target.value)}/>
            <h3>m2 Totales</h3>
            <InputRange maxValue={600} minValue={10} value={m2} onChange={m2 => {setM2(m2);
                                                                                setM2TotalesMayor(m2.max);
                                                                                setM2TotalesMenor(m2.min)}}/>
        </div>
    );
}