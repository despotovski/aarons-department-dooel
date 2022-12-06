import React from 'react'
import DataTable from './DataTable'
import TextColumnFilter from './Filters/TextColumnFilter'
import { SelectColumnFilter } from './index'
import { IconEyeVisibility, IconToolsEdit, IconDelete } from '../Icons'

const ExampleTable = () => {
  const columns = React.useMemo(
    () => [
      {
        id: 'id', // id of column in react table
        Header: 'ID', // label of column
        accessor: 'id', // from where react table gets the value
        name: 'id', // column used in db for filter and sort
        orderable: true, // is the column sorted in api for datatables
        disableSortBy: false, // is the column sorted in react-table
        searchable: false, // is the column searchable in api for datatables
        disableFilters: true, // is the column searchable in react-tables
        search: { value: '', regex: 'false' },
        Cell: ({ value }) => value.map(v => v.name), // custom render of column
        filterComponent: TextColumnFilter, // custom filter component
        filterSettings: {
          // prop: some filter settings
        } // custom filter component data
      },
      {
        id: 'username',
        Header: 'Name',
        accessor: 'username',
        name: 'username',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: false,
        search: { value: '', regex: 'false' },
        cellClassName: 'text-bold'
      },
      {
        id: 'email',
        Header: 'Email',
        accessor: 'email',
        name: 'email',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: false,
        search: { value: '', regex: 'true' },
        filterComponent: SelectColumnFilter, // custom filter component
        filterSettings: {
          isMulti: true,
          options: [
            { label: 'test@test.com', value: 'test@test.com' },
            { label: 'test1@test.com', value: 'test1@test.com' }
          ]
        } // cu
      },
      {
        id: 'status',
        Header: 'Status',
        accessor: 'status',
        name: 'status',
        orderable: true,
        disableSortBy: false,
        searchable: true,
        disableFilters: false,
        search: { value: '', regex: 'false' }
      },
      {
        id: 'actions',
        accessor: 'actions',
        name: 'edit',
        orderable: false,
        disableSortBy: true,
        searchable: false,
        disableFilters: true,
        search: { value: '', regex: 'false' },
        Cell: ({ value, row }) => {
          return (
            <div className='flex'>
              <a className='btn-icon' href=''>
                <IconEyeVisibility />
              </a>
              <a className='btn-icon' href=''>
                <IconToolsEdit />
              </a>
              <button className='btn-icon' type='button'>
                <IconDelete />
              </button>
            </div>
          )
        }
      }
    ],
    []
  )

  const firstBulkAction = (ids) => {
    console.log('action1', ids)
  }

  const secondBulkAction = (ids) => {
    console.log('action2', ids)
  }

  const bulkActions = [
    { name: 'action1', callback: firstBulkAction },
    { name: 'action2', callback: secondBulkAction }
  ]

  return (
    <div className=''>
      <DataTable
        columns={columns}
        fetchUrl='/test/users/get'
        initialState={{
          pageSize: 3, // custom page size
          sortBy: [{ id: 'id', desc: true }, { id: 'username', desc: false }], // custom sort
          hiddenColumns: ['id'] // hide columns by id
        }}
        globalSearch={false}
        filterMultipleColumns={{ // search multiple fields with single filter
          header: 'Search(First Name, Email)', // label of multiple columns
          columns: ['username', 'email'], // which columns to search
          filterSettings: {
            minSearchLength: 3
          }
        }}
        bulkActions={bulkActions} // if table has bulk actions
        // version={1} // change to new version is saved sort by needs to be reset, column id is updated, or deleted
      />
    </div>
  )
}

export default ExampleTable
