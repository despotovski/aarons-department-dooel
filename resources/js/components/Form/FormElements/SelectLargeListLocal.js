import React, { useState, useEffect, Component } from 'react'
import ReactSelect from 'react-select'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { FixedSizeList as List } from 'react-window'
import { useTranslation } from 'react-i18next'
import { isRequiredFromRules, Link, route } from '../../../utils'
import { IconToolsAdd, IconToolsEdit } from '../../Icons'
import { ReactTooltip } from '../../index'

export const SelectLargeListLocal = ({ formField, value, onChange, hasErrors, errors }) => {
  const { t } = useTranslation()
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
    rules
  } = formField

  const isRequired = isRequiredFromRules(rules)

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className={`select-input input-element ${(!!errors && !!errors.length) ? 'has-errors' : ''}`}>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <ReactSelect
          value={fieldSelect}
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
          className='select-custom-input'
          classNamePrefix={isMulti ? 'select-multi' : 'select'}
          isSearchable={!!isSearchable === false ? isSearchable : true}
          components={{ MenuList }}
          isDisabled={isDisabled}
          hideSelectedOptions={hideSelectedOptions}
          escapeClearsValue={escapeClearsValue}
          styles={{
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
              return {
                ...styles,
                backgroundColor: data.nonActive
                  ? '#bfbfbf'
                  : styles.backgroundColor,
                color: data.nonActive
                  ? '#444444'
                  : styles.color
              }
            }
          }}
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

class MenuList extends Component {
  render () {
    const height = 35
    const { options, children, maxHeight, getValue } = this.props
    const [value] = getValue()
    const initialOffset = options.indexOf(value) * height
    const listHeight = maxHeight <= children.length * height ? maxHeight : children.length * height + 5

    return (
      <List
        height={listHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    )
  }
}
