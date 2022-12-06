import React from 'react'

const IconMove = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <polygon
        fill='currentColor'
        className='st0' points='19.2,10.8 19.2,7.2 24,12 19.2,16.8 19.2,13.2 13.2,13.2 13.2,19.2 16.8,19.2 12,24 7.2,19.2
        10.8,19.2 10.8,13.2 4.8,13.2 4.8,16.8 0,12 4.8,7.2 4.8,10.8 10.8,10.8 10.8,4.8 7.2,4.8 12,0 16.8,4.8 13.2,4.8 13.2,10.8 '
      />
    </svg>
  )
}
export default IconMove
