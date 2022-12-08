import React, { useRef } from 'react'
import { useToasts } from 'react-toast-notifications'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import LayoutAdmin from '../../components/Shared/Layout/Admin/LayoutAdmin'
import { DataTable, IconDelete, IconEyeVisibility, IconToolsEdit, ReactModal } from '../../components'
import { Link, route } from '../../utils'
import RemoveShift from './RemoveShift'
import { SHIFT_TYPE, TYPE_STATUS, TAXABLE } from '../Shared/Constants'

const Index = () => {
  const { links } = usePage().props
  const modalRef = useRef()
  const { addToast } = useToasts()
  const tableRef = useRef()
  const { t } = useTranslation()

  const columns = [
    {
      id: 'date',
      Header: 'Date',
      accessor: 'date',
      name: 'date',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' }
    },
    {
      id: 'employee',
      Header: 'Employee',
      accessor: 'employee.full_name',
      name: 'employee',
      orderable: false,
      disableSortBy: true,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' }
    },
    {
      id: 'employer',
      Header: 'Employer',
      accessor: 'employee.employer.name',
      name: 'employer',
      orderable: false,
      disableSortBy: true,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' }
    },
    {
      id: 'hours',
      Header: 'Hours',
      accessor: 'hours',
      name: 'hours',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' },
      Cell: ({ value, row }) => {
        return value ? value + 'H' : '-'
      }
    },
    {
      id: 'rate_per_hour',
      Header: 'Rate per hour',
      accessor: 'rate_per_hour',
      name: 'rate_per_hour',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' },
      Cell: ({ value, row }) => {
        return value ? '£ ' + value : '-'
      }
    },
    {
      id: 'taxable',
      Header: 'Taxable',
      accessor: 'taxable',
      name: 'taxable',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' },
      Cell: ({ value, row }) => {
        return value === TAXABLE.TAXABLE_YES ? 'Yes' : 'No'
      }
    },
    {
      id: 'status',
      Header: 'Status',
      accessor: 'status',
      name: 'status',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' },
      Cell: ({ value, row }) => {
        if (row.original.status === TYPE_STATUS.STATUS_COMPLETE) {
          return ('Complete')
        } else if (row.original.status === TYPE_STATUS.STATUS_FAILED) {
          return ('Failed')
        } else if (row.original.status === TYPE_STATUS.STATUS_PENDING) {
          return ('Pending')
        }
        return '-'
      }
    },
    {
      id: 'type',
      Header: 'Type',
      accessor: 'type',
      name: 'type',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' },
      Cell: ({ value, row }) => {
        return value === SHIFT_TYPE.DAY ? 'Day' : 'Night'
      }
    },
    {
      id: 'paid_at',
      Header: 'Paid at',
      accessor: 'paid_at',
      name: 'paid_at',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' },
      Cell: ({ value, row }) => {
        return value ?? '-'
      }
    },
    {
      id: 'total_paid',
      Header: 'Total paid',
      accessor: 'total_paid',
      name: 'total_paid',
      orderable: false,
      disableSortBy: false,
      searchable: false,
      disableFilters: false,
      search: { value: '', regex: 'true' },
      filterRule: {
        rule: 'searchByTotalPaid'
      },
      Cell: ({ value, row }) => {
        return row.original.hours && row.original.rate_per_hour
          ? '£ ' + row.original.hours * row.original.rate_per_hour
          : '-'
      }
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
            <>
              <Link href={route(links.shift.edit, { shift: row.original.id})}>
                <IconToolsEdit />
              </Link>
              <button onClick={() => handleDeleteShift(row.original.id)}>
                <IconDelete />
              </button>
            </>
          </div>
        )
      }
    }
  ]

  const handleDeleteShift = (shiftId) => {
    const title = 'Delete a shift'
    const body = (
      <RemoveShift
        shiftId={shiftId}
        cancelCallback={handleDeleteShiftCancelCallback}
        successCallback={handleDeleteShiftSuccessCallback}
      />
    )
    modalRef.current.setContent(title, body)
  }
  const handleDeleteShiftCancelCallback = () => {
    modalRef.current.close()
  }

  const handleDeleteShiftSuccessCallback = (res) => {
    tableRef.current.reload()
    addToast(res.data.message, res.data.appearance ? { appearance: res.data.appearance } : { appearance: 'success' })
    modalRef.current.close()
  }

  return (
    <LayoutAdmin>
      <div className='container mt-xxl'>
        <div className='flex-space-between'>
          <div className='pb-md'>
            <h1 className='pb-0 page-header'>Shifts</h1>
          </div>
          <a href={links.shift.create} type='button' className='btn btn-primary mh-xs'>
            Create Shift
          </a>
        </div>

        <DataTable
          ref={tableRef}
          columns={columns}
          fetchUrl={links.shift.get}
          initialState={{
            pageSize: 10,
            sortBy: [
              { id: 'date', desc: true }
            ]
          }}
        />
      </div>
      <ReactModal ref={modalRef} className='ReactModal__Content--Medium' />
    </LayoutAdmin>
  )
}

export default Index
