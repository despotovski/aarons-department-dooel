import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'
import { IconEyeVisibility, IconEyeVisibilityOff, IconSearch } from '../../../components'

export const Input = ({ formField, value, onChange, errors, showOnly, onKeyUp }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    readOnly, // is the element read only
    isDisabled, // is the element disabled
    type, // type of the element
    min, // min attribute of the element
    max, // max attribute of the element
    step, // 1 by default, can be 0.1 or 0.01 when you need float numbers
    accept, // accept attribute of the element
    placeholder, // placeholder of the element
    description,
    rules
  } = formField

  if (showOnly) {
    return (
      <FieldWrapper wrapper={wrapper}>
        <div className='field-wrapper-selector input-element'>

          {label &&
            <label htmlFor={name}>{label}</label>}

          <p>{value ?? ''}</p>
        </div>
      </FieldWrapper>
    )
  }

  if (type === 'hidden') {
    return (
      <FieldWrapper wrapper={wrapper}>
        <div className={`field-wrapper-selector input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
          <input
            type='hidden'
            value={value ?? ''}
            name={name}
          />
          <FieldError errors={errors} />
        </div>
      </FieldWrapper>
    )
  }

  const isRequired = isRequiredFromRules(rules)
  const [passwordShown, setPasswordShown] = React.useState(false)
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  if (type === 'password') {
    return (
      <FieldWrapper wrapper={wrapper}>
        <div className={`field-wrapper-selector input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
          {label &&
            <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

          <div className='pass-wrapper'>
            <input
              id={name}
              type={passwordShown ? 'text' : 'password'}
              min={min}
              max={max}
              value={value ?? ''}
              name={name}
              accept={accept}
              placeholder={placeholder}
              readOnly={readOnly}
              onChange={onChange}
              disabled={isDisabled}
            />
            <i onClick={togglePasswordVisibility}> {passwordShown ? <IconEyeVisibility className='fill-current input-width-25' /> : <IconEyeVisibilityOff className='fill-current input-width-25' />} </i>
          </div>
          <FieldError errors={errors} />
          {description && <p className='description'>{description}</p>}
        </div>
      </FieldWrapper>
    )
  }

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className={`field-wrapper-selector input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''} ${type === 'search' ? 'input-search' : ''}`}>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <input
          id={name}
          type={type}
          min={min}
          max={max}
          value={value ?? ''}
          name={name}
          step={step}
          accept={accept}
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={onChange}
          disabled={isDisabled}
          onKeyUp={onKeyUp}
        />

        {type === 'search' && <IconSearch />}

        {description && <p className='description'>{description}</p>}
        <FieldError errors={errors} />
      </div>
    </FieldWrapper>
  )
}
