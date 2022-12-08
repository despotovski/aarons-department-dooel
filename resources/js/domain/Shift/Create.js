import React, { useMemo } from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder, IconChevronLeft } from '../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import LayoutAdmin from '../../components/Shared/Layout/Admin/LayoutAdmin'
import { Link } from '../../utils'

const Create = () => {
  const { t } = useTranslation()
  const { links, options } = usePage().props

  const formData = useMemo(
    () => ({
      form: {
        url: links.shift.store,
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
          rules: 'required',
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
          rules: 'required',
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
          text: 'Update'
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
            <h1 className='pb-0 page-header'>Create shift</h1>
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
