import React, { useState, useEffect } from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import ReactSelect, { createFilter } from 'react-select'
import { useTranslation } from 'react-i18next'
import { isRequiredFromRules, Link, route } from '../../../utils'
import { IconToolsAdd, IconToolsEdit } from '../../Icons'
import { ReactTooltip } from '../../index'

export const Select = ({ formField, value, onChange, errors, showOnly }) => {
  const { t } = useTranslation()
  const customStyle = {
    menu: base => ({ ...base, zIndex: 9999, marginTop: '0px', position: 'absolute', bottom: '0', backgroundColor: 'white' }),
    menuList: base => ({ ...base, backgroundColor: 'white', marginBottom: '-10px', bottom: '10px', borderRadius: '0px', border: '2px solid #C9CBCE', borderTop: 'none' })
}
  if (showOnly) {
    return (
      <FieldWrapper wrapper={formField.wrapper}>
        <div className='field-wrapper-selector input-element'>

          {formField.label &&
            <label htmlFor={formField.name}>{formField.label}</label>}

          <p>{value ?? ''}</p>
        </div>
      </FieldWrapper>
    )
  }

  let innerValue

  if (formField.isMulti) {
    innerValue = formField.options.filter(o => value && value.length && value.indexOf(o.value) !== -1)
  } else {
    innerValue = formField.options.filter(o => value === o.value)[0]
  }

  const [fieldSelect, setFieldSelect] = useState(innerValue)

  useEffect(() => {
    if (value !== innerValue) {
      if (formField.isMulti) {
        innerValue = formField.options.filter(o => value && value.length && value.indexOf(o.value) !== -1)
      } else {
        const temp = formField.options.filter(o => value === o.value)
        innerValue = temp || null
      }
      setFieldSelect(innerValue)
    }
  }, [value])

  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    options, // options for the select
    isMulti = false, // is the select multi
    isSearchable = false, // is the select searchable
    isClearable = false, // is the select clearable
    hideSelectedOptions = false, // should the selected options be hidden from the options
    escapeClearsValue = false, // should escape clear selected values
    createAction, // create action connected to dropdown
    editAction, // create action connected to dropdown
    showCustomValue, // show custom value of the selection
    isDisabled = false, // is the dropdown disabled
    description,
    rules,
    menuPortalTarget,
    minSearchLength = 0
  } = formField

  const filterOption = (candidate, input) => {
    return (
      // Min input length
      input.length >= minSearchLength &&
      // Use Select's default filtering for string matching by creating filter
      createFilter({})(candidate, input)
    )
  }

  const isRequired = isRequiredFromRules(rules)

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className={`select-input input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <ReactSelect
          value={fieldSelect}
          filterOption={filterOption}
          menuPortalTarget={menuPortalTarget || false}
          styles={menuPortalTarget && customStyle}
          onChange={e => {
            // setFieldSelect(e)
            const value = isMulti
              ? (e
                  ? e.map(el => el.value)
                  : null)
              : (e
                  ? e.value
                  : null)

            onChange(value)
          }}
          options={options}
          isMulti={isMulti}
          isClearable={isClearable}
          placeholder={t('ui.select_option')}
          noOptionsMessage={() => t('ui.no_results')}
          name={name}
          className={`select-custom-input ${menuPortalTarget && 'body-parent-dropdown'}`}
          classNamePrefix={isMulti ? 'select-multi' : 'select'}
          isSearchable={isSearchable}
          hideSelectedOptions={hideSelectedOptions}
          escapeClearsValue={escapeClearsValue}
          isDisabled={isDisabled}
        />

        {createAction &&
          <div className='btn-select-action__wrap'>
            <ReactTooltip content={createAction.tooltip} placement='right'>
              <Link
                href={createAction.link}
                className='btn-select-action'
              >
                <IconToolsAdd />
              </Link>
            </ReactTooltip>
          </div>}

        {editAction && !isMulti && fieldSelect &&
          <div className='btn-select-action__wrap btn-select-action__wrap-edit'>
            <ReactTooltip content={editAction.tooltip} placement='right'>
              <Link
                href={route(editAction.link, { id: fieldSelect.value })}
                className='btn-select-action'
              >
                <IconToolsEdit />
              </Link>
            </ReactTooltip>
          </div>}

        <FieldError errors={errors} />

        {
          description && <p className='description'>{description}</p>
        }
      </div>

      {showCustomValue && !isMulti && fieldSelect &&
        <div className='input-element input-text'>
          <label>{showCustomValue.label}</label>
          <p className='text-bold ml-4'>{fieldSelect[showCustomValue.value]}</p>
        </div>}
    </FieldWrapper>
  )
}
