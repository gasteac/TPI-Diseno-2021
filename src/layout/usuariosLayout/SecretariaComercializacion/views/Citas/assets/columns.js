import { format } from 'date-fns';

export const COLUMNS1 = [
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
        accessor: 'estado',
    },
    {
        Header: 'Fecha',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(Number(value)), 'dd/MM/yyyy HH:mm')},
    },
    {
        Header: 'Agente',
        accessor: 'agent',
    }
]

export const COLUMNS2 = [
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
        accessor: 'estado',
    },
    {
        Header: 'Fecha',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(Number(value)), 'dd/MM/yyyy HH:mm')},
    }
]