import React, { useMemo } from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft } from '../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import LayoutAdmin from '../../components/Shared/Layout/Admin/LayoutAdmin'
import { Link, route } from '../../utils'
import { TAXABLE } from '../Shared/Constants'

const Create = () => {
  const { t } = useTranslation()
  const { links, options, shift } = usePage().props

  const formData = useMemo(
    () => ({
      form: {
        url: route(links.shift.update, { shift: shift.id }),
        method: 'post',
        wrapper: {
          element: 'div',
          class: 'row'
        }
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'full_name',
          label: 'Employee name',
          placeholder: 'Employee name',
          value: shift.employee.full_name,
          rules: 'required',
          isDisabled: true,
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'name',
          label: 'Employer name',
          placeholder: 'Employer name',
          value: shift.employee.employer.name,
          rules: 'required',
          isDisabled: true,
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.DATEPICKER,
          name: 'date',
          label: 'Date',
          placeholder: 'Date',
          value: shift.date ? new Date(shift.date) : '',
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'hours',
          label: 'Hours',
          placeholder: 'Hours',
          value: shift.hours ? shift.hours : '',
          rules: 'required|integer',
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'rate_per_hour',
          label: 'Rate per hour',
          placeholder: 'Rate per hour',
          value: shift.rate_per_hour ? shift.rate_per_hour : '',
          rules: 'required|integer',
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          type: 'text',
          name: 'taxable',
          label: 'Taxable',
          placeholder: 'Taxable',
          options: options.taxable,
          value: shift.taxable,
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          type: 'text',
          name: 'status',
          label: 'Status',
          placeholder: 'Status',
          options: options.statuses,
          value: shift.status,
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          type: 'text',
          name: 'type',
          label: 'Type',
          placeholder: 'Type',
          options: options.type,
          value: shift.type,
          rules: 'required',
          wrapper: {
            element: 'div',
            class: 'col-6'
          }
        },
      ],
      buttons: {
        class: 'form-footer col-12',
        submit: {
          class: 'btn btn-primary',
          text: t('ui.update')
        },
        additional: [
          {
            class: 'btn btn-primary-ghost',
            text: t('ui.cancel'),
            type: 'button',
            onClick: () => {
              Inertia.visit(links.shift.index)
            }
          }
        ]
      }
    }),
    []
  )

  return (
    <LayoutAdmin>
      <section className='pv-xl'>
        <div className='container'>
          <div className='pb-md'>
            <h1 className='pb-0 page-header'>Edit shift</h1>
          </div>

          <Link href={links.shift.index} className='btn-back'>
            <IconChevronLeft />
            Back to list of shifts
          </Link>

          <div className='form-container'>
            <FormBuilder
              formData={formData}
            />

          </div>
        </div>
      </section>
    </LayoutAdmin>
  )
}

export default Create
