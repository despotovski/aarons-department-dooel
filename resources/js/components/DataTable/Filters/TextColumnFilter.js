import React, { useEffect, useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { IconSearch } from '../../../components/Icons'
import parse from 'html-react-parser'

function TextColumnFilter ({
  column: { Header, filterValue, setFilter, filterSettings, id }
}) {
  const [value, setValue] = useState(filterValue)

  const {
    minSearchLength = 0, // min chars for search
    customHeader // custom header of filter
  } = filterSettings ?? {}

  useEffect(() => {
    setValue(filterValue)
  }, [filterValue])

  const onChange = useAsyncDebounce(value => {
    if (value.length === 0 || value.length >= minSearchLength) {
      setFilter(value)
    }
  }, 200)

  return (
    <div className='input-element input-text'>
      <label htmlFor={`search-${id}`}>{customHeader ? parse(customHeader) : Header}</label>
      <div className='input-container filter-search'>
        <input
          type='text'
          id={`search-${id}`}
          value={value || ''}
          onChange={e => {
            setValue(e.target.value)
            onChange(e.target.value)
          }}
          placeholder='Search'
        />
        <IconSearch className='icon-search' />
      </div>
    </div>
  )
}

export default TextColumnFilter
