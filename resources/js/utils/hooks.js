import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { debounce } from './helpers'

export const usePrevious = (value) => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef()
  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current
}

export const useWindowResized = () => {
  const [size, setSize] = useState([0, 0])
  const html = document.querySelector('html')
  const updateSize = () => {
    setSize([html.clientWidth, html.clientHeight])
  }
  const debouncedUpdateSize = debounce(updateSize, 200)

  useLayoutEffect(() => {
    window.addEventListener('resize', debouncedUpdateSize)
    updateSize()
    return () => window.removeEventListener('resize', debouncedUpdateSize)
  }, [])
  return size
}
