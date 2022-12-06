import React, { useEffect, useRef, useState } from 'react'
import ReactAsyncSelect from 'react-select/async'
import { api, isRequiredFromRules, objectToQuerystring } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'

export const AsyncSelect = ({ formField, value, onChange, errors, showOnly }) => {
  const { t } = useTranslation()
  const ref = useRef()

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

  const [fieldSelect, setFieldSelect] = useState('')
  const [inputSelect, setInputSelect] = useState('')

  useEffect(() => {
    let params = {
      selectedValues: value
    }

    params = objectToQuerystring(params)

    api.get(fetchUrl + params)
      .then(res => {
        if (formField.isMulti) {
          setFieldSelect(res.data)
        } else {
          setFieldSelect(res.data[0])
        }
      })
  }, [value])

  const {
    minSearchLength = 0, // min chars for search
    fetchUrl, // endpoint to get options for the select
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    isMulti = false, // is the select multi
    isClearable = false, // is the select clearable
    hideSelectedOptions = true, // should the selected options be hidden from the options
    escapeClearsValue = false, // should escape clear selected values
    isDisabled = false, // is the dropdown disabled
    rules, // rules for the element
    fetchOnOpen = formField.fetchOnOpen ?? false // fetch options on focus
  } = formField

  const isRequired = isRequiredFromRules(rules)

  const searchFilterOptions = (inputValue, callback) => {
    setInputSelect(inputValue)

    if (inputValue.length >= minSearchLength) {
      let params = {
        searchValue: inputValue
      }

      params = objectToQuerystring(params)

      api.get(fetchUrl + params)
        .then(res => {
          callback(res.data)
        })
    } else {
      callback(null)
    }
  }

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='select-input'>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <ReactAsyncSelect
          ref={ref}
          onMenuOpen={() => fetchOnOpen && ref.current.handleInputChange(' ')}
          minimumInput={minSearchLength}
          loadOptions={(inputValue, callback) => searchFilterOptions(inputValue, callback)}
          value={fieldSelect || ''}
          onChange={e => {
            setFieldSelect(e)

            const value = isMulti
              ? (e
                  ? e.map(el => el.value)
                  : null)
              : (e
                  ? e.value
                  : null)

            onChange(value)
          }}
          isMulti={isMulti}
          isClearable={isClearable}
          placeholder={t('ui.select_option')}
          noOptionsMessage={() => inputSelect.length < minSearchLength ? t('ui.min_chars_search', { length: minSearchLength }) : t('ui.no_results')}
          name={name}
          className='select-custom-input'
          classNamePrefix={isMulti ? 'select-multi' : 'select'}
          isSearchable
          hideSelectedOptions={hideSelectedOptions}
          escapeClearsValue={escapeClearsValue}
          isDisabled={isDisabled}
        />
        <FieldError errors={errors} />
      </div>

    </FieldWrapper>
  )
}
