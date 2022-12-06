import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'

export const Radio = ({ formField, value, onChange, errors }) => {
  const selectedOption = value ?? ''

  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    options, // options for the radio
    isDisabled, // is the element disabled
    rules
  } = formField

  const isRequired = isRequiredFromRules(rules)

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='input-element input-radio'>
        <FieldError errors={errors} />

        {label &&
          <label>{label} {isRequired ? '*' : ''}</label>}

        {options.map(({ value, label }) => {
          return (
            <div key={`${name}-radio-input-${value}`} className='input-wrapper'>
              <input
                type='radio'
                id={`${name}-radio-input-${value}`}
                value={value.toString()} name={name}
                onChange={onChange}
                checked={selectedOption && selectedOption.toString() === value.toString()}
                disabled={isDisabled}
              />
              <label htmlFor={`${name}-radio-input-${value}`} key={value}>{label}</label>
            </div>
          )
        })}
      </div>
    </FieldWrapper>
  )
}
