import React from 'react'
import Rug, { DropArea } from 'react-upload-gallery'
import { FieldWrapper } from '../index'
import { FieldError } from './FieldError'
import { isRequiredFromRules } from '../../../utils'

const Gallery = ({ formField, value, onChange, errors, showOnly }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    rules // rules of the element
  } = formField

  const isRequired = isRequiredFromRules(rules)

  if (showOnly) {
    return (
      <FieldWrapper wrapper={wrapper}>
        {label &&
          <label htmlFor={name}>{label}</label>}

        <div className='rug'>
          <div className='rug-items __card'>
            {value.map((img, i) => (
              <div key={`rug-card-item-${i}`}>
                <div className='rug-item'>
                  <div className='rug-card '>
                    <div className='rug-card-name'>
                      <div>
                        {img.name}
                      </div>
                    </div>
                    <div className='rug-card-image' style={{ backgroundImage: `url(${img.source})` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FieldWrapper>
    )
  }

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='col-md-6' />
      <Rug
        action={null}
        autoUpload={false}
        initialState={value}
        inOrder
        header={({ openDialogue }) => (
          <DropArea>
            {
              (isDrag) =>
                <div className='form-group'>
                  {label &&
                    <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

                  <div className='input-file'>
                    <p className='input-file-placeholder'>Sélectionner une image</p>
                    <button type='button' className='btn-tertiary' onClick={openDialogue}>Parcourir</button>
                  </div>
                </div>
            }
          </DropArea>

        )}
        onChange={(images) => {
          images.forEach((img, i) => {
            img.done = true
            img.order = i
          })
          onChange(images)
        }}

      />

      <FieldError errors={errors} />
    </FieldWrapper>
  )
}

export default Gallery
