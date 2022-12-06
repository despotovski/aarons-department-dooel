const IconFavorute = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 19'>
      <path d='M17,11v3h3v2h-3v3h-2v-3h-3v-2h3v-3H17z M18.2,1.8c2.2,2.2,2.3,5.6,0.5,7.9C17.9,9.2,17,9,16,9c-3.3,0-6,2.7-6,6
        c0,1,0.2,2,0.7,2.8L10,18.5L1.5,10c-2.1-2.4-2-6,0.2-8.2C4-0.5,7.6-0.6,10,1.5C12.4-0.6,16-0.5,18.2,1.8z'
      />
    </svg>
  )
}

export default IconFavorute
