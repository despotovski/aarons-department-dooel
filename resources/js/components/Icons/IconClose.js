import React from 'react'

const IconClose = ({ className }) => {
  return (
    <svg
      className={`svg-inline ${className || ''}`}
      viewBox='0 0 46 46'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path strokeWidth='8' d='M45.647 44.033c1.064 1.066-.526 2.693-1.61 1.61L23 24.607 1.962 45.643C.884 46.72-.712 45.098.353 44.033l21.038-21.035L.353 1.962C-.718.89.891-.718 1.963.353L23 21.39 44.038.353c1.072-1.071 2.68.537 1.61 1.61L24.61 22.997l21.037 21.035z' />
    </svg>

  )
}
export default IconClose
