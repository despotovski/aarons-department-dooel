import React, { useRef } from 'react'
import { DataTable, ReactModal } from '../../components'
import { useToasts } from 'react-toast-notifications'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
const EmployeePayments = () => {
  const { links } = usePage().props
  const modalRef = useRef()
  const { addToast } = useToasts()
  const tableRef = useRef()
  const { t } = useTranslation()

  const columns = [
    {
      id: 'full_name',
      Header: 'Full Name',
      accessor: 'full_name',
      name: 'full_name',
      headerClassName: 'cell-width',
      orderable: true,
      disableSortBy: false,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' }
    },
    {
      id: 'employer',
      Header: 'Employer',
      accessor: 'employer.name',
      name: 'employer',
      headerClassName: 'cell-width',
      orderable: false,
      disableSortBy: true,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' }
    }
  ]

  return (
    <div className='container mt-xxl'>
      <DataTable
        ref={tableRef}
        columns={columns}
        fetchUrl={links.employee.get}
        initialState={{
          pageSize: 10,
          sortBy: [
            { id: 'full_name', desc: true }
          ]
        }}
      />
      <ReactModal ref={modalRef} className='ReactModal__Content--Medium' />
    </div>
  )
}

export default Index
