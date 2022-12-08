import React, { useEffect, useRef, useState } from 'react'
import {
  FileUpload
} from '../../components'
import { useTranslation } from 'react-i18next'
import { usePage } from '@inertiajs/inertia-react'
import { api, handleFormErrors, validateFormData } from '../../utils'
import { Formik } from 'formik'

const ImportList = ({ cancelCallback, successCallback }) => {
  const { t } = useTranslation()
  const { links } = usePage().props
  const formRef = useRef(null)

  return (
    <>
      <Formik
        innerRef={formRef}
        initialValues={{}}
        enableReinitialize
        validate={values => {
          const rules = {
            file: 'required'
          }

          return validateFormData(values, rules)
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          const data = new FormData() // eslint-disable-line
          data.append('file', values.file)

          api.post(
            links.employee.import,
            data,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
            .then((res) => {
              setSubmitting(false)
              successCallback(res)
            })
            .catch((error) => {
              setSubmitting(false)
            })
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          values,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <div className='form-container'>
            <form onSubmit={handleSubmit} className='form-class row'>
              <div className='col-md-12'>
                <FileUpload
                  key='test_input'
                  formField={{
                    name: 'file',
                    label: 'Choose file or drag \'n drop',
                    placeholder: 'Choose file or drag \'n drop',
                    accept: 'application/vnd.ms-excel, .xlsx, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                  }}
                  value={values.file}
                  onChange={(e) => {
                    setFieldValue('file', e)
                  }}
                />
              </div>
              <div className='form-footer form-footer-right col-md-12'>
                <button
                  className='btn btn-primary-ghost'
                  type='button'
                  onClick={() => cancelCallback()}
                >
                 Cancel
                </button>
                <button
                  className='btn btn-primary'
                  type='submit'
                  disabled={isSubmitting}
                >
                 Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  )
}
export default ImportList
