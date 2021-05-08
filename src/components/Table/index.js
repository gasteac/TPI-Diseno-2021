import { useMemo } from "react";
import "./index.css";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import GlobalFilter from "./components/GlobalFilter";
import ColumnFilter from "./components/ColumnFilter";
import { Checkbox } from "./components/Checkbox";

export default function Table({ columnas, datos }) {
  // eslint-disable-next-line
  const columns = useMemo(() => columnas, []);
  // eslint-disable-next-line
  const data = useMemo(() => datos, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
    // eslint-disable-next-line
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

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
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <div style={{overflowX: "auto"}}>
        <table {...getTableProps()} className="table tabla-propia" >
          <thead className="tabla-header-propio" >
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="th-propio" style={{background:'#50628C', borderTop:'none', color:'white'}}
                  >
                    <div {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {" "}
                      {column.render("Header") }
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ↓"
                            : " ↑"
                          : " -"}
                      </span>
                    </div>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="table" style={{background:'#F5F5F5'}} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation example" className='d-flex justify-content-end mr-3'>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
          </li>

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      {/* <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedFlatRows: selectedFlatRows.map((row) => row.original),
                        },
                        null,
                        2
                    )}
                </code>
            </pre> */}
    </>
  );
}
