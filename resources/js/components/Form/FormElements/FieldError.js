import React from 'react'
import parse from 'html-react-parser'

export const FieldError = ({ errors, customMessage }) => {
  return (
    <>
      {errors && errors.length > 0 &&
        <small className='input-error-message text-danger'>{customMessage || parse(errors.join(' '))}</small>}
    </>
  )
}
