import React from 'react'
import i18n from 'i18next'
import DatePicker from 'react-multi-date-picker'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'
import { useTranslation } from 'react-i18next'
import gregorianEn from 'react-date-object/locales/gregorian_en'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import gregorianFr from '../Utils/MultiDatePickerLocales/gregorian_fr'

const locale = {
  en: gregorianEn,
  fr: gregorianFr
}

export const MultiDatepicker = ({ formField, value, onChange, errors, showOnly }) => {
  const { t } = useTranslation()

  // const [date, setDate] = useState(value)

  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    rules, // validation rules of the element
    dateFormat = 'DD/MM/YYYY', // format of the element
    onlyMonthPicker = false
  } = formField

  const isRequired = isRequiredFromRules(rules)

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

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className={`input-element input-text ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
        <FieldError errors={errors} />

        <DatePicker
          multiple
          value={value}
          onChange={date => {
            const formatDates = date.map(value => new Date(value))
            onChange(formatDates)
          }}
          locale={locale[i18n.language]}
          onlyMonthPicker={onlyMonthPicker}
          plugins={[
            <DatePanel position='right' header={t('ui.dates')} /> // eslint-disable-line
          ]}
          format={dateFormat}
        />

        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

      </div>
    </FieldWrapper>
  )
}
