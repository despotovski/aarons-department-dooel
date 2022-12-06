import React from 'react'
import parse from 'html-react-parser'
import { FieldWrapper } from './FieldWrapper'

export const Text = ({ formField }) => {
  const {
    wrapper, // wrapper for the element
    disableParse, // is parse disabled
    text, // displayed content
    label
  } = formField

  return (
    <FieldWrapper wrapper={wrapper}>
      {!!label &&
        <label>{label}</label>}
      {disableParse &&
        text}
      {!disableParse &&
        parse(text)}
    </FieldWrapper>
  )
}
