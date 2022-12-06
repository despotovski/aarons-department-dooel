import { Validate } from '../utils'

export const handleFormErrors = (formRef, errors) => {
  if (!!errors && !!Object.keys(errors).length) {
    formRef.current.setErrors(errors)
    formRef.current.setSubmitting(false)
  }
}

export const handleApiFormErrors = (error, setErrors) => {
  if (error.response.status === 422) {
    setErrors(error.response.data.errors)
  } else {
    window.location.replace(`/error/${error.response.status}`)
  }
}

export const validateFormData = (values, rules, messages = [], attributeNames = {}) => {
  let errors = {}

  const validation = new Validate(values, rules, messages)
  validation.setAttributeNames(attributeNames)

  if (validation.fails()) {
    errors = validation.errors.errors
  }

  return errors
}
