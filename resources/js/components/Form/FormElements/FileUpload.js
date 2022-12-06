import React, { useCallback } from 'react'
import { FieldWrapper } from './FieldWrapper'
import { isRequiredFromRules } from '../../../utils'
import { FieldError } from './FieldError'
import { IconUpload } from '../../Icons'
import { useTranslation } from 'react-i18next'
import { useDropzone } from 'react-dropzone'

export const FileUpload = ({ formField, errors, onChange, value }) => {
  const {
    wrapper, // wrapper for the element
    name, // name of the element
    label, // label of the element
    description, // description on the field
    rules,
    accept
  } = formField

  const onDrop = useCallback(acceptedFiles => {
    onChange(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 2097152,
    accept: accept
  })

  const isRequired = isRequiredFromRules(rules)

  const { t } = useTranslation()

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='dropzone-upload-image'>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <div {...getRootProps()} className='dropzone'>

          <input
            {...getInputProps()}
          />

          {isDragActive && isDragAccept &&
            <p>{t('ui.drop_files_here')}</p>}

          {isDragActive && isDragReject &&
            <p>{t('ui.file_not_allowed')}</p>}

          {!isDragActive &&
            <>
              <IconUpload className='icon-upload' />
              {value
                ? value.name
                : <p className='dropzone-text-b'>{t('ui.image_dropzone_placeholder')}</p>}
            </>}
        </div>
      </div>

      <FieldError errors={errors} />

      {description && <p className='description'>{description}</p>}
    </FieldWrapper>
  )
}
