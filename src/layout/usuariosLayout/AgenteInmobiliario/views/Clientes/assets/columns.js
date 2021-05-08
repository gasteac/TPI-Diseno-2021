export const COLUMNS = [
    {
        Header: 'Nro. cliente',
        accessor: 'id',
    },
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
        Header: 'Celular',
        accessor: 'phone',
        Cell: ({ value }) => { return format(new Date(Number(value)), 'dd/MM/yyyy HH:mm')},
    },
    {
        Header: 'País',
        accessor: 'country',
    },
    {
        Header: 'Estado',
        accessor: 'state',
    },
    {
        Header: 'Dirección',
        accessor: 'address',
    }
]