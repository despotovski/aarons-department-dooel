import React, { useEffect, useRef, useState } from 'react'
import { Formik } from 'formik'
import { api, Validate } from '../../utils'
import { Inertia } from '@inertiajs/inertia'

import {
  Input,
  Checkbox,
  Radio,
  Textarea,
  Select,
  AsyncSelect,
  SelectLargeListLocal,
  Text,
  Datepicker, FORM_ELEMENT_TYPES, ReCaptcha, ImageDropzone, FieldWrapper, FileUpload
} from '..'
import { usePage } from '@inertiajs/inertia-react'
import { useTranslation } from 'react-i18next'
import { RichTextEditor } from './FormElements/RichTextEditor'
import { MultiDatepicker } from './FormElements/MultiDatepicker'
import Gallery from './FormElements/Gallery'

const FormBuilder = (props) => {
  const {
    formData,
    useInertia = true,
    validateOnChange = false,
    validateOnBlur = false,
    successCallback,
    errorCallback,
    model,
    showFormError = true,
    showOnly = false

  } = props

  const { errors } = usePage().props
  const { t } = useTranslation()
  const [errorsFirstLoad, setErrorsFirstLoad] = useState(true)

  const submitter = useInertia ? Inertia : api

  const formRef = useRef(null)

  const getInitialValues = () => {
    const buildInitialValues = { submitAction: '' }

    formData.fields.forEach((formField) => {
      buildInitialValues[formField.name] = formField.value
    })

    return buildInitialValues
  }

  const [initialValues, setInitialValues] = useState(getInitialValues())

  useEffect(() => {
    if (!!errors && !!Object.keys(errors).length && !errorsFirstLoad) {
      formRef.current.setErrors(errors)
      formRef.current.setSubmitting(false)
    }
    setErrorsFirstLoad(false)
  }, [errors])

  useEffect(() => {
    formRef.current.setSubmitting(false)

    setInitialValues(getInitialValues())
  }, [model, formData])

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      enableReinitialize
      validate={values => {
        let errors = {}
        let validate = {}
        let rules = {}
        const messages = formData.validationMessages ?? []
        const attributeNames = {}

        formData.fields.forEach((formField) => {
          // don't include text elements
          if (formField.element === FORM_ELEMENT_TYPES.TEXT) {
            return
          }

          // don't include not visible elements
          if (!!formField.visible && !formField.visible(values)) {
            return
          }

          validate = {
            ...validate,
            [formField.name]: typeof values[formField.name] === 'boolean'
              ? (+values[formField.name]).toString()
              : values[formField.name]
          }

          if (typeof (formField.rules) !== 'undefined' || formField.rules != null) {
            rules = { ...rules, [formField.name]: formField.rules }
          }

          attributeNames[formField.name] =
            formField.attributeName
              ? formField.attributeName
              : (formField.label
                  ? formField.label
                  : formField.name
                )
        })

        const validation = new Validate(validate, rules, messages)
        validation.setAttributeNames(attributeNames)

        if (validation.fails()) {
          errors = validation.errors.errors
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        const data = { submitAction: values.submitAction }

        formData.fields.forEach((formField) => {
          // don't include text elements
          if (formField.element === FORM_ELEMENT_TYPES.TEXT) {
            return
          }

          // don't include not visible elements
          if (!!formField.visible && !formField.visible(values)) {
            return
          }

          if (typeof values[formField.name] !== 'undefined') {
            data[formField.name] = formField.submitFormat ? formField.submitFormat(values[formField.name]) : values[formField.name]
          }
        })

        let method = formData.form.method

        if (formData.form.method === 'put') {
          data._method = 'put'
          method = 'post'
        }

        if (formData.form.method === 'delete') {
          data._method = 'delete'
          method = 'post'
        }

        const request = submitter[method](
          formData.form.url, data
        )

        if (!useInertia) {
          request
            .then((res) => {
              setSubmitting(false)
              !!successCallback && successCallback(res)
            })
            .catch((error) => {
              setSubmitting(false)

              if (error.response.status === 422) {
                setErrors(error.response.data.errors)
              } else {
                if (errorCallback) {
                  /**
                   * error will be manually handled
                   */
                  errorCallback(error)
                } else {
                  /**
                   * default error handle
                   */
                  if (Object.keys(error.response.data).length === 1) {
                    /**
                     * TODO: set other way to check for prod?
                     */
                    window.location.replace(`/error/${error.response.status}`)
                  } else {
                    /**
                     * TODO: set better ui
                     */
                    alert(JSON.stringify(error.response.data)) // eslint-disable-line
                  }
                }
              }
            })
        }
      }}
      validateOnChange={validateOnChange}
      validateOnBlur={validateOnBlur}
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

        <form onSubmit={handleSubmit} className={formData.form.class ?? 'form-class'}>
          <FieldWrapper wrapper={formData.form.wrapper}>
            {
          /*eslint-disable*/
          formData.fields.map((formField) => {
            if (formField.visible && !formField.visible(values)) {
              return null
            }

            switch (formField.element) {
              case FORM_ELEMENT_TYPES.INPUT:
                return (
                  <Input
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      const value = e.target.value
                      setFieldValue(formField.name, value)

                      !!formField.callback && formField.callback(value, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.CHECKBOX:
                return (
                  <Checkbox
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      const value = e.target.checked
                      setFieldValue(formField.name, value)

                      !!formField.callback && formField.callback(value, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.RADIO:
                return (
                  <Radio
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      const value = e.target.value
                      setFieldValue(formField.name, value)

                      !!formField.callback && formField.callback(value, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.TEXTAREA:
                return (
                  <Textarea
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      const value = e.target.value
                      setFieldValue(formField.name, value)

                      !!formField.callback && formField.callback(value, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.SELECT:
                return (
                  <Select
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.ASYNC_SELECT:
                return (
                  <AsyncSelect
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.SELECT_LARGE_LISTS:
                return (
                  <SelectLargeListLocal
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.TEXT:
                return (
                  <Text
                    key={formField.name}
                    formField={formField}
                  />
                )
              case FORM_ELEMENT_TYPES.DATEPICKER:
                return (
                  <Datepicker
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    minDate={formField.minDateElement ? values[formField.minDateElement] : null}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.MULTI_DATEPICKER:
                return (
                  <MultiDatepicker
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.RECAPTCHA:
                return (
                  <ReCaptcha
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                  />
                )
              case FORM_ELEMENT_TYPES.IMAGE_DROPZONE:
                return (
                  <ImageDropzone
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.RICH_TEXT_EDITOR:
                return (
                  <RichTextEditor
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                    showOnly={showOnly}
                  />
                )
              case FORM_ELEMENT_TYPES.FILE_UPLOAD:
                return (
                  <FileUpload
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={errors[formField.name]}
                  />
                )
              case FORM_ELEMENT_TYPES.GALLERY:
                let galleryErrors = errors[formField.name] ?? []
                values[formField.name] && values[formField.name].forEach((v,i) => {
                  const subError = errors[`${formField.name}.${i}.file`]
                  if (subError) {
                    galleryErrors = galleryErrors.concat(subError.map(err => `${v.name} ${err}`))
                  }
                })

                return (
                  <Gallery
                    key={formField.name}
                    formField={formField}
                    value={values[formField.name]}
                    onChange={(e) => {
                      setFieldValue(formField.name, e)

                      !!formField.callback && formField.callback(e, values, setFieldValue)
                    }}
                    errors={galleryErrors}
                    showOnly={showOnly}
                  />
                )
            }
          })
          /* eslint-enable */
          }

            {showFormError && !!errors && !!Object.keys(errors).length &&
              <div className='col-12 mt-lg'>
                <small className='input-error-message text-danger'>{t('validation.form_submit_error')}</small>
              </div>}

            {!showOnly &&
              <div className={formData.buttons?.class ?? 'form-footer form-footer-right col-12'}>
                {!!formData.buttons?.additional &&
              formData.buttons.additional.map((btn, i) =>
                <button
                  key={`form-additional-button-${i}`}
                  className={btn.class}
                  type={btn.type}
                  disabled={isSubmitting}
                  onClick={() => btn.onClick && btn.onClick(setFieldValue, formRef)}
                >
                  {btn.text}
                </button>
              )}

                {!formData.buttons?.submit?.hidden &&
                  <button
                    className={formData.buttons?.submit?.class ?? 'btn btn-primary'}
                    type='submit'
                    disabled={isSubmitting}
                    onClick={(e) => {
                      setFieldValue('submitAction', '')
                    }}
                  >
                    {formData.buttons?.submit?.text ?? t('ui.submit')}
                  </button>}
              </div>}
          </FieldWrapper>
        </form>

      )}
    </Formik>
  )
}

export default FormBuilder
