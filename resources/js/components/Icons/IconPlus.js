import React from 'react'

const IconPlus = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.4 16.1'>
      <polygon
        fill='currentColor' fillRule='nonzero' points='6.8,7.1 6.8,1.7 8.6,1.7 8.6,7.1 14,7.1 14,8.9 8.6,8.9 8.6,14.3 6.8,14.3 6.8,8.9
      1.4,8.9 1.4,7.1 '
      />
    </svg>

  )
}

export default IconPlus
