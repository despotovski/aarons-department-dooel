import React, { useEffect, useRef } from 'react'
import { Formik } from 'formik'
import { api, handleApiFormErrors, handleFormErrors, validateFormData } from '../../utils'

import {
  Input,
  Checkbox,
  Radio,
  Textarea,
  Select,
  Datepicker,
  ImageDropzone
} from '..'
import { usePage } from '@inertiajs/inertia-react'
import { useTranslation } from 'react-i18next'

const ExampleFormPlain = () => {
  const { errors } = usePage().props
  const { t } = useTranslation()

  const formRef = useRef(null)

  useEffect(() => {
    handleFormErrors(formRef, errors)
  }, [errors])

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        test_input: '2'
      }}
      enableReinitialize
      validate={values => {
        const rules = {
          test_input: 'required|min:2',
          test_checkbox: 'accepted',
          test_radio: 'required'
        }

        return validateFormData(values, rules)
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        // Example Inertia
        // Inertia.post(
        //   '/test/users/store',
        //   values
        // )

        // Example Axios
        api.post(
          '/test/users/store',
          values
        )
          .then((res) => {
            setSubmitting(false)
          })
          .catch((error) => {
            setSubmitting(false)

            handleApiFormErrors(error, setErrors)
          })
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
        /* and other goodies */
      }) => (
        <div className='form-container'>
          <form onSubmit={handleSubmit} className='form-class row'>
            <div className='col-md-12'>
              <Input
                key='test_input'
                formField={{
                  type: 'text',
                  name: 'test_input',
                  label: 'Text',
                  placeholder: 'Name'
                }}
                value={values.test_input}
                onChange={(e) => {
                  const value = e.target.value
                  setFieldValue('test_input', value)
                }}
                errors={errors.test_input}
              />
            </div>

            <div className='col-md-12'>
              <Input
                key='text_be'
                formField={{
                  type: 'text',
                  name: 'text_be',
                  label: 'Text',
                  placeholder: 'Name'
                }}
                value={values.text_be}
                onChange={(e) => {
                  const value = e.target.value
                  setFieldValue('text_be', value)
                }}
                errors={errors.text_be}
              />
            </div>

            <div className='col-md-12'>
              <Checkbox
                key='test_checkbox'
                formField={{
                  name: 'test_checkbox',
                  label: 'Checkbox',
                  value: false
                }}
                value={values.test_checkbox}
                onChange={(e) => {
                  const value = e.target.checked
                  setFieldValue('test_checkbox', value)
                }}
                errors={errors.test_checkbox}
              />
            </div>

            <div className='col-md-12'>
              <Radio
                key='test_radio'
                formField={{
                  name: 'test_radio',
                  value: 'false',
                  options: [
                    { label: 'Yes', value: 'true' },
                    { label: 'No', value: 'false' }
                  ]
                }}
                value={values.test_radio}
                onChange={(e) => {
                  const value = e.target.value
                  setFieldValue('test_radio', value)
                }}
                errors={errors.test_radio}
              />
            </div>

            <div className='col-md-12'>
              <Textarea
                key='test_text_area'
                formField={{
                  name: 'test_text_area',
                  label: 'Textarea',
                  rows: 4,
                  value: '23'
                }}
                value={values.test_text_area}
                onChange={(e) => {
                  const value = e.target.value
                  setFieldValue('test_text_area', value)
                }}
                errors={errors.test_text_area}
              />
            </div>

            <div className='col-md-12'>
              <Select
                key='test_select'
                formField={{
                  name: 'test_select',
                  label: 'Select',
                  placeholder: 'select',
                  isSearchable: false,
                  options: [
                    { label: 'Yes', value: '1' },
                    { label: 'No', value: '0' }
                  ]
                }}
                value={values.test_select}
                onChange={(e) => {
                  setFieldValue('test_select', e)
                }}
                errors={errors.test_select}
              />
            </div>

            <div className='col-md-12'>
              <Datepicker
                key='test_datepicker'
                formField={{
                  name: 'test_datepicker',
                  label: 'Date Picker',
                  value: new Date(),
                  maxDate: new Date()
                }}
                value={values.test_datepicker}
                onChange={(e) => {
                  setFieldValue('test_datepicker', e)
                }}
                errors={errors.test_datepicker}
              />
            </div>

            <div className='col-md-12'>
              <ImageDropzone
                key='test_file'
                formField={{
                  name: 'test_file',
                  label: 'logo'
                }}
                value={values.test_file}
                onChange={(e) => {
                  setFieldValue('test_file', e)
                }}
                errors={errors.test_file}
              />
            </div>

            <div className='form-footer form-footer-right col-md-12'>
              <button
                className='btn btn-primary'
                type='submit'
                disabled={isSubmitting}
              >
                {t('ui.submit')}
              </button>
            </div>
          </form>
        </div>

      )}
    </Formik>
  )
}

export default ExampleFormPlain
