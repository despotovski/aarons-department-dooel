import React from 'react'

const IconDelete = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'>
      <path
        d='M3.5,2.8V0.7C3.5,0.3,3.8,0,4.2,0h5.6c0.4,0,0.7,0.3,0.7,0.7v2.1H14v1.4h-1.4v9.1
        c0,0.4-0.3,0.7-0.7,0.7H2.1c-0.4,0-0.7-0.3-0.7-0.7V4.2H0V2.8H3.5z M4.9,1.4v1.4h4.2V1.4H4.9z'
      />
    </svg>
  )
}
export default IconDelete
