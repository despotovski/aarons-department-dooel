import React from 'react'

const IconCheck = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.3 23.3'>
      <path d='M11.7,0C5.2,0,0,5.2,0,11.7s5.2,11.7,11.7,11.7s11.7-5.2,11.7-11.7S18.1,0,11.7,0z M10.3,15.7l-4.1-4l1.4-1.3l2.7,2.6
        l5.5-5.3L17.2,9L10.3,15.7z'
      />
    </svg>
  )
}

export default IconCheck
