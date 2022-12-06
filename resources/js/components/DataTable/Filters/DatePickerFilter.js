import React, { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import i18n from 'i18next'
import { enGB, fr } from 'date-fns/esm/locale'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'

const locale = {
  en: enGB,
  fr: fr
}

registerLocale(i18n.language, locale[i18n.language])

export const DatePickerFilter = ({
  column: { Header, filterValue, setFilter, filterSettings, id }
}) => {
  const { t } = useTranslation()

  const [date, setDate] = useState('')

  const {
    isDisabled = false, // is the date picker read only
    maxDate, // max date of date picker,
    minDate, // min date of date picker,
    isClearable = true, // is the element clearable
    showMonthYearPicker = false, // is the element month/year picker
    dateFormat = ['dd/MM/yyyy', 'dd-MM-yyyy'], // format of the element
    placeholder = null // placeholder of the element
  } = filterSettings ?? {}

  useEffect(() => {
    !filterValue && setDate('')
  }, [filterValue])

  return (
    <div className='input-element input-text'>
      <label>{Header}</label>
      <DatePicker
        selected={date}
        onChange={date => {
          setDate(date)
          setFilter(`^${format(date, dateFormat[0])}$`)
        }}
        minDate={minDate}
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
      />
    </div>

  )
}
