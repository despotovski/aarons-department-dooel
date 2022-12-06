import React, { useEffect, useState } from 'react'
// import Select, { components } from 'react-select'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'
// import { IconArrowDown } from '../../Icons'

function SelectColumnFilter ({
  column: { Header, filterValue, setFilter, filterSettings }
}) {
  const { t } = useTranslation()

  let innerValue

  if (filterSettings.isMulti) {
    innerValue = filterSettings.options.filter(o => filterSettings.initialValue && filterSettings.initialValue.length && filterSettings.initialValue.indexOf(o.value) !== -1)
  } else {
    innerValue = filterSettings.options.filter(o => filterSettings.initialValue === o.value)[0]
  }

  const [fieldSelect, setFieldSelect] = useState(innerValue)

  const {
    options, // options for the select
    isMulti = false, // is the select multi
    isSearchable = false, // is the select searchable
    isClearable = false, // is the select clearable
    hideSelectedOptions = false, // should the selected options be hidden from the options
    escapeClearsValue = false, // should escape clear selected values
    customHeader // custom header of filter
  } = filterSettings ?? {}

  // const DropdownIndicator = props => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <IconArrowDown />
  //     </components.DropdownIndicator>
  //   );
  // };

  useEffect(() => {
    !filterValue && setFieldSelect(null)
  }, [filterValue])

  return (
    <div className='select-input'>
      <label>{customHeader ? parse(customHeader) : Header}</label>
      <Select
        options={options}
        value={fieldSelect || ''}
        onChange={e => {
          setFieldSelect(e)

          const value = isMulti
            ? (e
                ? e.map(el => `^${el.value}$`).join('|')
                : null)
            : (e
                ? `^${e.value}$`
                : null)

          setFilter(value)
        }}
        isMulti={isMulti}
        // components={{ DropdownIndicator }}
        placeholder={t('ui.select_option')}
        noOptionsMessage={() => t('ui.no_results')}
        className='select-custom-input'
        classNamePrefix={isMulti ? 'select-multi' : 'select'}
        isSearchable={isSearchable}
        isClearable={isClearable}
        hideSelectedOptions={hideSelectedOptions}
        escapeClearsValue={escapeClearsValue}
      />

    </div>
  )
}

export default SelectColumnFilter
