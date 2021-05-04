import { useMemo } from "react";
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";

export default function Table() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter,
        }
    }, [])

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn,
    },
    useFilters ,useGlobalFilter, useSortBy, usePagination)

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        prepareRow, 
        state, 
        setGlobalFilter, 
        nextPage, 
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
    } = tableInstance

    const { globalFilter, pageIndex } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ' -'}
                                        </span>
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                    
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <span>
                    Page{' '}
                    <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </>
    );
}