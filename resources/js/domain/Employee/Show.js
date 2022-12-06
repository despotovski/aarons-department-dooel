import React, { useRef } from 'react'
import { DataTable, FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft } from '../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import { useToasts } from 'react-toast-notifications'
import { Link, route } from '../../utils'
import LayoutAdmin from '../../components/Shared/Layout/Admin/LayoutAdmin'

const Show = () => {
  const { links, employee, averagePay, averageTotalPaid } = usePage().props
  const tableRef = useRef()
  const { t } = useTranslation()

  const formData = React.useMemo(
    () => ({
      form: {
        url: '',
        method: 'post'
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'type_status',
          label: 'Full Name',
          placeholder: t('fields.status'),
          value: employee.full_name,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'averagePay',
          label: 'Average pay per hour',
          placeholder: t('fields.shop'),
          value: '£ ' + averagePay,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'averageTotalPay',
          label: 'Average Total Paid',
          placeholder: t('fields.shop'),
          value: '£ ' + averageTotalPaid,
          wrapper: {
            element: 'div',
            class: 'col-md-6'
          }
        }
      ]
    }),
    []
  )

  const columns = [
    {
      id: 'status',
      Header: 'Status',
      accessor: 'status',
      name: 'status',
      headerClassName: 'cell-width',
      orderable: false,
      disableSortBy: true,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' }
    },
    {
      id: 'paid',
      Header: 'Paid',
      accessor: 'paid',
      name: 'paid',
      headerClassName: 'cell-width',
      orderable: false,
      disableSortBy: true,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' },
      Cell: ({ value, row }) => {
        return '£ ' + value
      }
    },
    {
      id: 'paid_at',
      Header: 'Paid at',
      accessor: 'paid_at',
      name: 'paid_at',
      headerClassName: 'cell-width',
      orderable: false,
      disableSortBy: true,
      searchable: false,
      disableFilters: true,
      search: { value: '', regex: 'true' }
    }
  ]


  return (
    <LayoutAdmin>
      <div className='container mt-xxl'>
        <h1 className='page-header'>General info -  { employee.full_name }</h1>

        <Link href={links.employee.index} className='btn-back'>
          <IconChevronLeft />
          Back to list of employees
        </Link>

        <div className='form-container mt-xxl'>
          <FormBuilder
            formData={formData}
            showOnly
          />
        </div>

        <DataTable
          ref={tableRef}
          columns={columns}
          fetchUrl={route(links.employee.getEmployeePayments, { employee: employee.id})}
          initialState={{
            pageSize: 10,
            sortBy: [
              { id: 'status', desc: true }
            ]
          }}
        />
      </div>
    </LayoutAdmin>
  )
}

export default Show
