import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'

export const Textarea = ({ formField, value, onChange, errors, showOnly }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    rows, // rows attribute of the element
    maxLength, // maxLength attribute of the element
    placeholder, // placeholder  of the element
    counter, // should counter of the element be displayed
    rules,
    description // description of the field
  } = formField

  const isRequired = isRequiredFromRules(rules)

  if (showOnly) {
    return (
      <FieldWrapper wrapper={wrapper}>
        <div className={`input-text input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
          {label &&
            <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}
          {value}
        </div>
      </FieldWrapper>
    )
  }
  return (
    <FieldWrapper wrapper={wrapper}>
      <div className={`input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <textarea
          id={name}
          value={value}
          name={name}
          rows={rows}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
        />

        {counter &&
          <div className='textarea-counter'>
            {value.length ? value.length : 0}/{maxLength}
          </div>}

        <FieldError errors={errors} />
        {description && <p className='description'>{description}</p>}
      </div>
    </FieldWrapper>
  )
}
