export const COLUMS1 = [
    {
        Header: 'Nombre',
        accessor: 'first_name',
    },
    {
        Header: 'Apellido',
        accessor: 'last_name',
    },
    {
        Header: 'E-mail',
        accessor: 'email',
    },
    {
        Header: 'Estado',
        accessor: 'email',
    },
    {
        Header: 'Fecha',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(Number(value)), 'dd/MM/yyyy HH:mm')},
    },
    {
        Header: 'Hora',
        accessor: 'state',
    },
    {
        Header: 'Agente',
        accessor: 'state',
    }
]

export const COLUMS2 = [
    {
        Header: 'Nombre',
        accessor: 'first_name',
    },
    {
        Header: 'Apellido',
        accessor: 'last_name',
    },
    {
        Header: 'E-mail',
        accessor: 'email',
    },
    {
        Header: 'Estado',
        accessor: 'email',
    },
    {
        Header: 'Fecha',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(Number(value)), 'dd/MM/yyyy HH:mm')},
    },
    {
        Header: 'Hora',
        accessor: 'state',
    }
]