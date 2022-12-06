import React from 'react'

const IconX = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
      <path d='M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M15,13.6L13.6,15L10,11.4L6.4,15L5,13.6L8.6,10L5,6.4L6.4,5  L10,8.6L13.6,5L15,6.4L11.4,10L15,13.6z' />
    </svg>
  )
}

export default IconX
