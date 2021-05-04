import { format } from 'date-fns';
import ColumnFilter from './ColumnFilter';

export const COLUMNS = [
    {
        Header: 'Id',
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
        Header: 'Fecha',
        accessor: 'date',
        Cell: ({ value }) => { return format(new Date(Number(value)), 'dd/MM/yyyy HH:mm')},
    },
    {
        Header: 'Estado',
        accessor: 'state',
    }
]