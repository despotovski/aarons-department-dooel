import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { EditorState } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { isRequiredFromRules } from '../../../utils'

export const RichTextEditor = ({ formField, value, onChange, errors }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    readOnly, // is the element read only
    rules,
    description
  } = formField

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(
      stateFromHTML(value ?? '')
    )
  )

  const handleOnChange = (editorState) => {
    setEditorState(editorState)
    value = editorState.getCurrentContent().hasText() ? stateToHTML(editorState.getCurrentContent()) : ''
    onChange(value)
  }

  const isRequired = isRequiredFromRules(rules)

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='input-element'>
        <div className='input-wrapper'>

          <FieldError errors={errors} />

          {description && <p className='description'>{description}</p>}

          {label && <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

          <Editor
            editorState={editorState}
            onEditorStateChange={handleOnChange}
            readOnly={readOnly}
            toolbar={{
              options: ['inline', 'list', 'textAlign'],
              inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough']
              },
              textAlign: {
                options: ['left', 'center', 'right', 'justify']
              },
              list: {
                options: ['unordered', 'ordered']
              }
            }}
          />
        </div>

      </div>
    </FieldWrapper>
  )
}
