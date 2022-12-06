import React, {
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter, useFilters, useRowSelect } from 'react-table'
import { api, objectToQuerystring } from '../../utils'
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
  IconChevronUp,
  GlobalDateRangeFilter,
  GlobalFilter,
  TextColumnFilter,
  SelectRowCheckbox,
  BulkActionsSelect,
  CellParse
  // IconArrowDown

} from '..'
import { useTranslation } from 'react-i18next'

const DataTable = forwardRef(({
  columns,
  fetchUrl,
  initialState = {},
  globalSearch = false,
  globalDateRangeSearch = false,
  noDataMessage,
  filterMultipleColumns = false,
  bulkActions,
  customClass,
  rowProps = {}
}, ref) => {
  const { t } = useTranslation()
  // We'll start our table without any data
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [controlledPageCount, setControlledPageCount] = useState(0)
    const [filteredCount, setFilteredCount] = useState(0) // eslint-disable-line
    const [recordsFrom, setRecordFrom] = useState(0) // eslint-disable-line
    const [recordsTo, setRecordTo] = useState(0) // eslint-disable-line
  const [filterMultipleColumnsValue, setFilterMultipleColumnsValue] = useState('')
  const fetchIdRef = useRef(0)
  const [selectedRowsEntityIds, setSelectedRowsEntityIds] = useState([])
  const [globalDateRangeFilter, setGlobalDateRangeFilter] = useState(null)
  let ajaxRequest = null

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      filterComponent: TextColumnFilter,
      Cell: CellParse
    }),
    []
  )

  const initialFilters = []
  columns.forEach(c => {
    if (c.filterSettings && c.filterSettings.initialValue) {
      initialFilters.push({ id: c.id, test: 'OK', value: c.filterSettings.initialValue })
    }
  })

  if (!initialState.hiddenColumns) {
    initialState.hiddenColumns = []
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    allColumns,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    // Get the state from the instance
    state: {
      pageIndex,
      pageSize,
      sortBy,
      globalFilter,
      filters,
      selectedRowIds
    },
    setGlobalFilter,
    setAllFilters
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageIndex: 0,
        filters: initialFilters,
        pageSize: initialState.pageSize ?? 10,
        sortBy: initialState.sortBy ?? [],
        hiddenColumns: initialState.hiddenColumns ?? [],
        selectedRowIds: {}
      }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
      manualSortBy: true,
      manualGlobalFilter: true,
      manualFilters: true
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      !!bulkActions && !!bulkActions.length && hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <SelectRowCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <SelectRowCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ])
    }
  )

  useImperativeHandle(
    ref,
    () => ({
      reload () {
        fetchData({
          pageIndex,
          pageSize,
          sortBy,
          globalFilter,
          filters,
          filterMultipleColumnsValue
        })
      }
    })
  )

  // Listen for changes in selected row
  useEffect(() => {
    const selectedRowsIndexes = Object.keys(selectedRowIds)
    const selectedData = data.filter((rows, i) => selectedRowsIndexes.includes(i.toString()))
    let selectedDataIds = []

    if (selectedData.length) {
      selectedDataIds = selectedData.map(row => row.id)
    }

    setSelectedRowsEntityIds(selectedDataIds)
  }, [selectedRowIds])

  // Listen for changes in and use the state to fetch our new data
  useEffect(() => {
    gotoPage(0)
  }, [globalFilter, filters, filterMultipleColumnsValue, globalDateRangeFilter])

  useEffect(() => {
    fetchData({
      pageIndex,
      pageSize,
      sortBy,
      globalFilter,
      filters,
      filterMultipleColumnsValue,
      globalDateRangeFilter
    })
  }, [pageIndex, pageSize, sortBy, globalFilter, filters, filterMultipleColumnsValue, globalDateRangeFilter])

  const fetchData = useCallback(({
    pageSize,
    pageIndex,
    sortBy,
    globalFilter,
    filters,
    filterMultipleColumnsValue,
    globalDateRangeFilter
  }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current
    const dataTableColumns = columns.map(c => {
      return {
        id: c.id,
        name: c.name,
        accessor: c.accessor,
        orderable: c.orderable,
        searchable: c.searchable,
        orderRule: c.orderRule ?? '',
        filterRule: c.filterRule ?? '',
        search: { value: c.search.value, regex: c.search.regex } // value is '' to reset filter
      }
    })

    // Set the loading state
    setLoading(true)

    // Only update the data if this is the latest fetch
    if (fetchId === fetchIdRef.current) {
      // sort column
      const order = []
      sortBy.forEach((el, i) => {
        order[i] = {}
        order[i].column = dataTableColumns.findIndex(x => x.id === el.id).toString()
        order[i].dir = el.desc ? 'desc' : 'asc'
      })

      // filters
      if (filters.length) {
        filters.forEach(f => {
          dataTableColumns.forEach(c => {
            if (c.id === f.id) {
              c.search.value = f.value ? encodeURIComponent(f.value) : f.value
            }
          })
        })
      }

      const additionalParams = {}

      if (filterMultipleColumns) {
        additionalParams.multiple_columns = {
          columns: filterMultipleColumns.columns,
          value: filterMultipleColumnsValue ? encodeURIComponent(filterMultipleColumnsValue) : filterMultipleColumnsValue
        }
      }

      if (globalDateRangeFilter) {
        additionalParams.global_date_range = globalDateRangeFilter

        if (globalDateRangeSearch.params) {
          additionalParams.global_date_range = {
            ...additionalParams.global_date_range,
            ...globalDateRangeSearch.params
          }
        }
      }

      let params = {
        draw: fetchId,
        columns: dataTableColumns,
        start: pageIndex * pageSize,
        length: pageSize,
        order: order,
        search: { value: globalFilter ? encodeURIComponent(globalFilter) : '', regex: 'false' },
        ...additionalParams
      }

      params = objectToQuerystring(params)

      if (ajaxRequest) {
        ajaxRequest.cancel()
      }

      ajaxRequest = api.CancelToken.source()

      api.get(fetchUrl + params, { cancelToken: ajaxRequest.token })
        .then(res => {
          setData(res.data.data)
          // Your server could send back total page count.
          // For now we'll just fake it, too
          setControlledPageCount(Math.ceil(res.data.recordsFiltered / pageSize))
          setFilteredCount(res.data.recordsFiltered)
          setRecordFrom((pageSize * pageIndex) + 1)
          setRecordTo((pageSize * pageIndex) + res.data.data.length)

          setLoading(false)
        })
          .catch(error => { }) // eslint-disable-line
    }
  }, [])

  const getVisiblePages = (page, total) => {
    if (total < 7) {
      return [1, 2, 3, 4, 5, 6].filter(page => page <= total)
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total]
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total]
      } else {
        return [1, 2, 3, 4, 5, total]
      }
    }
  }

  // Render the UI for your table
  return (
    <div className='table-layout-container'>
      {globalSearch &&
        <div className='row'>
          <div className='col-md-6'>
            <GlobalFilter
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        </div>}

      {globalDateRangeSearch &&
        <div className='row'>
          <GlobalDateRangeFilter
            filterValue={globalDateRangeFilter}
            setFilter={setGlobalDateRangeFilter}
            filterSettings={globalDateRangeSearch}
          />
        </div>}

      {(!!headerGroups.filter(hg => hg.headers.filter(c => c.canFilter).length).length || filterMultipleColumns) &&
        <div className='row'>
          {filterMultipleColumns &&
            <div className='col-md-3'>
              <TextColumnFilter
                column={{
                  Header: filterMultipleColumns.header,
                  filterValue: filterMultipleColumnsValue,
                  setFilter: setFilterMultipleColumnsValue,
                  filterSettings: filterMultipleColumns.filterSettings
                }}
              />
            </div>}

          {allColumns.length && allColumns.map((column, i) => (
            ((column.canFilter && !initialState.hiddenColumns.includes(column.id)) || column.forceFilter)
              ? !column.noWrap
                  ? (
                    <div key={`search-column-${i}`} className='col-md-3'>
                      {column.render('filterComponent')}
                    </div>
                    )
                  : (
                    <Fragment key={`search-column-${i}`}>
                      {column.render('filterComponent')}
                    </Fragment>
                    )
              : null
          ))}
        </div>}

      {(!!globalFilter || !!globalDateRangeFilter || !!filters.length || filterMultipleColumnsValue) &&
        <button
          className='btn btn-primary-ghost mb-5'
          onClick={() => {
            setGlobalFilter(null)
            setGlobalDateRangeFilter(null)
            setAllFilters([])
            setFilterMultipleColumnsValue('')
          }}
        >{t('ui.reset_filters')}
        </button>}

      {!!bulkActions && !!bulkActions.length &&
        <div className='row'>
          <div className='col-3'>
            <BulkActionsSelect
              bulkActions={bulkActions}
              selectedRowsEntityIds={selectedRowsEntityIds}
              dataSize={data.length}
            />
          </div>
        </div>}
      <div className='table-scroll-wrap'>
        <table
          {...getTableProps()}
          className={`table-layout table-striped ${customClass || ''} ${loading ? 'loading-table-data' : ''}`}
        >
          <thead className='table-layout__header'>
            {headerGroups.map((headerGroup, i) => (
              <tr key={`header-group-${i}`} {...headerGroup.getHeaderGroupProps()} className='table-layout__header-row'>
                {headerGroup.headers.map((column, j) => (
                  <th
                    key={`header-${j}`} {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`table-layout__header-col ${column.headerClassName ?? ''}`}
                  >
                    <div className='table-layout__header-col-container'>
                      {column.render('Header')}
                      <span className='table-layout__header-icon'>
                        {column.isSorted
                          ? column.isSortedDesc
                              ? <IconChevronDown />
                              : <IconChevronUp />
                          : ''}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className='table-layout__body'>
            {!!pageCount && page.map((row, i) => {
              prepareRow(row)
              return (
                <tr
                  key={`row-${i}`}
                  {...row.getRowProps()}
                  className={`table-layout__body-row ${rowProps && rowProps.onClick ? 'hover-pointer' : ''}`}
                  onClick={() => rowProps && rowProps.onClick && rowProps.onClick(row)}
                >
                  {row.cells.map(cell => {
                    return (
                      <td
                        key={`cell-${cell.id}`}
                        {...cell.getCellProps()}
                        className={`table-layout__body-col ${cell.column.cellClassName ?? ''}`}
                      >{cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}

          </tbody>
        </table>
        {!loading && !pageCount &&
          <div className='table-layout__body-row'>
            <div className='table-layout__body-col text-center'>{noDataMessage ?? t('ui.no_results')}</div>
          </div>}

        {!!loading &&
          <div className='table-layout__body-row'>
            <div className='table-layout__body-col text-center'>{t('ui.loading')}</div>
          </div>}
      </div>

      {!!pageCount &&
        <div className='table-pagination__wrap'>
          {/* <p className='mr-5'>{recordsFrom} - {recordsTo} / {filteredCount}</p> */}

          <div className='table-pagination'>
            {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className={`table-pagination__button ${canPreviousPage ? '' : 'is-disabled'}`}> */}
            {/* </button> */}
            <button
              onClick={() => previousPage()} disabled={!canPreviousPage}
              className={`table-pagination__directions prev ${canPreviousPage ? '' : 'is-disabled'}`}
            >
              {canPreviousPage && <IconChevronLeft />}
              <span>{t('ui.previous')}</span>
            </button>
            {getVisiblePages(pageIndex, pageCount).map((page, index, array) => {
              return (
                <div key={`pagination-${index}`}>
                  {page === pageCount && pageCount > 6 && pageIndex < pageCount - 2 &&
                    <span key='prev-pages' className='table-pagination__button'>...</span>}

                  <button
                    key={index} className={`table-pagination__button ${pageIndex + 1 === page ? 'is-active' : ''}`}
                    onClick={() => gotoPage(page - 1)}
                  >
                    {page}
                  </button>

                  {page === 1 && pageCount > 6 && pageIndex > 4 &&
                    <span key='prev-pages' className='table-pagination__button'>...</span>}
                </div>
              )
            })}
            <button
              onClick={() => nextPage()} disabled={!canNextPage}
              className={`table-pagination__directions next ${canNextPage ? '' : 'is-disabled'}`}
            >
              <span>{t('ui.next')}</span>
              {canNextPage && <IconChevronRight />}
            </button>
            {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className={`table-pagination__button ${canNextPage ? '' : 'is-disabled'}`}> */}
            {/* </button> */}
          </div>
        </div>}
    </div>
  )
}
)

export default DataTable
