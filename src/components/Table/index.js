import { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from "react-table";
import GlobalFilter from "./components/GlobalFilter";
import ColumnFilter from "./components/ColumnFilter";
import { Checkbox } from "./components/Checkbox";
import Delete from "./components/Delete";
import ModifyState from "./components/ModifyState";

export default function Table({ columnas, datos }) {

    const columns = useMemo(() => columnas, [])
    const data = useMemo(() => datos, [])

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
    useFilters ,useGlobalFilter, useSortBy, usePagination, useRowSelect, 
    (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({ row }) => (
                        <Checkbox {...row.getToggleRowSelectedProps()} />
                    )
                },
                ...columns,
            ]
        })
    }
    )

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
        selectedFlatRows
    } = tableInstance

    const { globalFilter, pageIndex } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} className='tabla'>
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
                {/* <Delete itemsToDelete={selectedFlatRows} items={datos} />
                <ModifyState itemsToModifyState={selectedFlatRows} items={datos} /> */}
            </div>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedFlatRows: selectedFlatRows.map((row) => row.original),
                        },
                        null,
                        2
                    )}
                </code>
            </pre>
        </>
    );
}