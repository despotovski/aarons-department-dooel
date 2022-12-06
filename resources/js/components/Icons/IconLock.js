import React from 'react'

const IconLock = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 14'>
      <path
        fillRule='nonzero' d='M10.5,6H12v7.5H0V6h1.5V4.5C1.5,2,3.5,0,6,0s4.5,2,4.5,4.5V6z M7.5,6V4.5C7.5,3.7,6.8,3,6,3S4.5,3.7,4.5,4.5
        V6H7.5z'
      />
    </svg>
  )
}

export default IconLock
