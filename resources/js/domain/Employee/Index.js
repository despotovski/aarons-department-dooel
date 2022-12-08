import React, { useRef } from 'react'
import ImportList from './ImportList'
import { DataTable, ReactModal } from '../../components'
import { useToasts } from 'react-toast-notifications'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import { route } from '../../utils'
import LayoutAdmin from '../../components/Shared/Layout/Admin/LayoutAdmin'

const Index = () => {
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

  const handleImportEmployees = () => {
    const title = 'Import list of employees'
    const body = (
      <ImportList
        cancelCallback={handleImportEmployeesCancelCallback}
        successCallback={handleImportEmployeesSuccessCallback}
      />
    )
    modalRef.current.setContent(title, body)
  }

  const handleImportEmployeesCancelCallback = () => {
    modalRef.current.close()
  }

  const handleImportEmployeesSuccessCallback = (res) => {
    addToast(res.data.message, res.data.appearance ? { appearance: res.data.appearance } : { appearance: 'success' })
    modalRef.current.close()
    tableRef.current.reload()
  }

  return (
    <LayoutAdmin>
      <div className='container mt-xxl'>
        <div className='flex-space-between'>
          <div className='pb-md'>
            <h1 className='pb-0 page-header'>Employees</h1>
          </div>
          <button onClick={() => handleImportEmployees()} type='button' className='btn btn-primary mh-xs'>
            Import File
          </button>
        </div>

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
          rowProps={{
            onClick: (row) => {
              Inertia.visit(route(links.employee.generalInfo, { employee: row.original.id }))
            }
          }}
        />
        <ReactModal ref={modalRef} className='ReactModal__Content--Medium' />
      </div>
    </LayoutAdmin>
  )
}

export default Index
