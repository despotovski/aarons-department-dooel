import React, { useMemo } from 'react'
import { FormBuilder } from '../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import { route } from '../../utils'

const RemoveShift = ({ cancelCallback, successCallback, shiftId }) => {
  const { t } = useTranslation()
  const { links } = usePage().props
  const formData = useMemo(
    () => ({
      form: {
        url: route(links.shift.destroy, { shift: shiftId }),
        method: 'delete',
        class: 'form-class row'
      },
      fields: [],
      buttons: {
        submit: {
          text: 'Confirm'
        },
        additional: [
          {
            class: 'btn btn-primary-ghost mr-1',
            text: 'Cancel',
            type: 'button',
            onClick: () => {
              cancelCallback()
            }
          }
        ]
      }
    }),
    []
  )
  return (
    <>
      <p>Are you sure that you want to delete this shift?</p>

      <FormBuilder
        useInertia={false}
        formData={formData}
        successCallback={successCallback}
      />
    </>
  )
}
export default RemoveShift
