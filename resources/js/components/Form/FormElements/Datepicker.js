import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import i18n from 'i18next'
import { enGB, fr } from 'date-fns/esm/locale'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'
import { useTranslation } from 'react-i18next'

const locale = {
  en: enGB,
  fr: fr
}

registerLocale(i18n.language, locale[i18n.language])

export const Datepicker = ({ formField, value, onChange, errors, minDate, showOnly }) => {
  const { t } = useTranslation()

  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    isDisabled = false, // is the date picker read only
    maxDate, // max date of date picker,
    isClearable = true, // is the element clearable
    rules, // validation rules of the element
    showMonthYearPicker = false, // is the element month/year picker
    dateFormat = ['dd/MM/yyyy', 'dd-MM-yyyy'], // format of the element
    placeholder = null, // placeholder of the element
    excludeDates = null, // excludes dates of the element
    includeDates = null, // includes dates of the element
    showYearPicker = false, // is the element year picker
    showTimeSelect,
    showTimeSelectOnly,
    timeIntervals,
    timeCaption
  } = formField

  const isRequired = isRequiredFromRules(rules)

  if (showOnly) {
    return (
      <FieldWrapper wrapper={wrapper}>
        <div className='input-element input-text'>

          {label &&
            <label htmlFor={name}>{label}</label>}

          <p>{value ?? ''}</p>
        </div>
      </FieldWrapper>
    )
  }

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className={`form-field input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <DatePicker
          selected={value}
          onChange={date => {
            onChange(date)
          }}
          minDate={minDate || formField.minDate}
          maxDate={maxDate}
          locale={i18n.language}
          showYearDropdown
          showMonthDropdown
          dateFormat={dateFormat}
          isClearable={!isDisabled && isClearable}
          disabled={isDisabled}
          dropdownMode='select'
          showMonthYearPicker={showMonthYearPicker}
          placeholderText={placeholder ?? t('ui.select_date')}
          excludeDates={excludeDates}
          includeDates={includeDates}
          showYearPicker={showYearPicker}
          showTimeSelect={showTimeSelect}
          showTimeSelectOnly={showTimeSelectOnly}
          timeIntervals={timeIntervals}
          timeCaption={timeCaption}
        />

        <FieldError errors={errors} />
      </div>
    </FieldWrapper>
  )
}
