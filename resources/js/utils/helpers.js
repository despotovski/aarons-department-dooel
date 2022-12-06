import { parse } from 'date-fns'

const el = document.getElementById('app')
const initialPageData = JSON.parse(el.dataset.page)

export const parseQueryString = () => {
  const str = window.location.search
  const objURL = {}

  str.replace(
    new RegExp('([^?=&]+)(=([^&]*))?', 'g'),  // eslint-disable-line
    function ($0, $1, $2, $3) {
      objURL[$1] = $3
    }
  )

  return objURL
}

export const objectToQuerystring = (params) => {
  let result = ''

  function convertJsonToQueryString (data, progress, name) {
    name = name || ''
    progress = progress || ''

    if (data && typeof data === 'object') {
      Object.keys(data).forEach(function (key) {
        const value = data[key]

        if (key !== 'Cell' && key !== 'Filter' && key !== 'filterMethod' && key !== 'Expander') {
          if (name === '') {
            convertJsonToQueryString(value, progress, key)
          } else {
            convertJsonToQueryString(value, progress, name + '[' + key + ']')
          }
        }
      })
    } else {
      result = result ? result.concat('&') : result.concat('?')
      result = result.concat(`${name}=${data}`)
    }
  }

  convertJsonToQueryString(params)

  return result
}

export const formatDate = (date) => {
  return date
    ? parse(date, 'yyyy-MM-dd HH:mm:ss', new Date())
    : null
}

export const isRequiredFromRules = (rules) => {
  let returnValue = false

  if (Array.isArray(rules)) {
    rules.forEach((rule) => {
      if (rule === 'required') {
        returnValue = true
      }
    })
  }

  if (typeof rules === 'string') {
    rules.split('|').forEach((rule) => {
      if (rule === 'required') {
        returnValue = true
      }
    })
  }

  return returnValue
}

export const flatArrayObject = (array, property) => {
  let result = []
  array.forEach(function (a) {
    result.push(a)
    if (Array.isArray(a[property])) {
      result = result.concat(flatArrayObject(a[property], property))
    }
  })
  return result
}

export const debounce = (func, limit) => {
  let lastFunc
  const context = this
  return function (...args) {
    clearTimeout(lastFunc)
    lastFunc = setTimeout(() => {
      func.apply(context, args)
    }, limit)
  }
}

export const calculateSlickToWindowOffset = (sliderRef, windowWidth, orientation = 'right') => {
  const slickSliderWrapper = sliderRef.current

  if (slickSliderWrapper) {
    const slickPosition = slickSliderWrapper.getBoundingClientRect()
    const spaceToOffset = Math.floor(windowWidth - slickPosition[orientation])
    const slickSliderEle = slickSliderWrapper.querySelector(`.slick-overflow-${orientation}`)

    slickSliderEle.setAttribute('style', `margin-${orientation}: -${spaceToOffset}px`)
  }
}

export const trans = (key) => {
  if (key[initialPageData.props.app.locale]) {
    return key[initialPageData.props.app.locale]
  }

  return key.en
}

export const stringSplice = (str, index, charDelete, add) => {
  // This does not mutate original string
  // handle from end of string if index is negative
  if (index < 0) {
    index = str.length + index
    if (index < 0) {
      index = 0
    }
  }

  let firstSlice = str.slice(0, index)
  let secondSlice = ''

  if (charDelete !== undefined && charDelete !== null && charDelete > 0) {
    firstSlice = str.slice(0, index)
    secondSlice = str.slice(charDelete, str.length)
  }

  return firstSlice + (add || '') + secondSlice
}
