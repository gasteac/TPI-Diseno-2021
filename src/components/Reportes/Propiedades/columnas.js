export const COLUMNS = [
    {
        Header: 'Nro. cliente',
        accessor: '_id',
    },
    {
        Header: 'Ubicacion',
        accessor: 'DatosDelInmueble.direccion',
    },
    {
        Header: 'Tipo',
        accessor: 'DatosDelInmueble.tipo',
    },
    {
        Header: 'Habitaciones',
        accessor: 'DatosDelInmueble.habitaciones',
    },
    {
        Header: 'Opciones de contrato',
        accessor: 'DatosDelInmueble.contrato',
    },
    {
        Header: 'Precio del inmueble',
        accessor: 'DatosDelInmueble.precio',
    }
]