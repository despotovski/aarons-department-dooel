import React from 'react'

const IconTransaction = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M3,3h18c0.6,0,1,0.4,1,1v16c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V4C2,3.4,2.4,3,3,3z M15,7v2h-4v2h4v2l3.5-3L15,7z M9,17v-2
        h4v-2H9v-2l-3.5,3L9,17z'
      />
    </svg>
  )
}
export default IconTransaction
