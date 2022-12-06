import React from 'react'
import { FORM_ELEMENT_TYPES, FormBuilder } from '../'
// import { useToasts } from 'react-toast-notifications'

const ExampleTable = () => {
  // const { addToast } = useToasts()

  const formData = React.useMemo(
    () => ({
      form: {
        url: '/test/users/store',
        method: 'post'
        // class: 'form-class' // optional - to override form class
      },
      fields: [
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'Text',
          label: 'Text',
          // value: '',
          placeholder: 'Name',
          rules: 'required|min:2'
          // wrapper: {
          //   element: 'div',
          //   class: 'form-group',
          // }
        },
        {
          element: FORM_ELEMENT_TYPES.INPUT,
          type: 'text',
          name: 'text_be',
          label: 'Text Back End',
          // value: '',
          placeholder: 'Name'
          // rules: 'required|min:2'
          // wrapper: {
          //   element: 'div',
          //   class: 'form-group',
          // }
        },
        {
          element: FORM_ELEMENT_TYPES.CHECKBOX,
          name: 'checkbox',
          label: 'Checkbox',
          value: false,
          rules: 'accepted'
          // wrapper: {
          //   element: 'div',
          //   class: 'tick-input checkbox'
          // }
        },
        {
          element: FORM_ELEMENT_TYPES.RADIO,
          name: 'radio',
          value: 'false',
          rules: 'required',
          options: [
            { label: 'Yes', value: 'true' },
            { label: 'No', value: 'false' }
          ]
          // wrapper: {
          //   element: "div",
          //   class: "tick-input"
          // }
        },
        {
          element: FORM_ELEMENT_TYPES.TEXTAREA,
          name: 'textarea',
          label: 'Textarea',
          rules: 'required',
          rows: 4,
          value: '23',
          visible: (values) => {
            if (values.remember === true) {
              return false
            }
            return true
          }
          // callback: (value, values, setFieldValue) => {
          //
          // }
          // wrapper: {
          //   element: "div",
          //   class: "form-textarea"
          // }
        },
        {
          element: FORM_ELEMENT_TYPES.SELECT,
          name: 'select',
          label: 'Select',
          rules: 'required',
          placeholder: 'select',
          isSearchable: false,
          // value: {label: "Yes", value : "1"},
          // isMulti: true,
          options: [
            { label: 'Yes', value: '1' },
            { label: 'No', value: '0' }
          ]
          // wrapper: {
          //   element: "div",
          //   class: "form-select"
          // }
        },
        {
          element: FORM_ELEMENT_TYPES.ASYNC_SELECT,
          name: 'async_select',
          label: 'Async Select',
          // rules: 'required',
          fetchUrl: ''
          // callback: (value, values, setFieldValue) => {
          //
          // }
        },
        {
          element: FORM_ELEMENT_TYPES.TEXT,
          name: 'text',
          // disableParse: true,
          text: '<div>asd</div>'
        },
        {
          element: FORM_ELEMENT_TYPES.DATEPICKER,
          name: 'date',
          rules: 'required',
          label: 'Date Picker',
          value: new Date(),
          // isDisabled: false,
          maxDate: new Date()
          // minDateElement: 'some-name' // name of element from which to get the date
        },
        // {
        //   element: FORM_ELEMENT_TYPES.RECAPTCHA,
        //   name: 'recaptcha',
        //   rules: 'required'
        // },
        {
          element: FORM_ELEMENT_TYPES.IMAGE_DROPZONE,
          name: 'image-dropzone',
          label: 'logo'
        }
      ],
      buttons: {
        // class: 'form-group', // optional - to override buttons wrap class
        // submit: { // optional
        //   text: 'Submit',  // optional - to override buttons class
        //   class: 'btn btn-primary' // optional - to override buttons class
        // },
        additional: [
          {
            class: 'btn btn-primary',
            text: 'Cancel',
            type: 'submit',
            onClick: (setFieldValue) => {
              console.log('test')

              // setFieldValue('submitAction', 'submit-continue') // ex. submit and continue
            }
          }
        ]
      }
    }),
    []
  )

  // const successCallback = (res) => {
  //   addToast(res.data.message, { appearance: 'success' })
  // }
  //
  // const errorCallback = (error) => {
  //   addToast('error', { appearance: 'error' })
  // }

  return (
    <div className='form-container'>
      <FormBuilder
        formData={formData}
        useInertia
        // validateOnChange={false}
        // validateOnBlur={false}
        // successCallback={successCallback} // custom handle for success if useInertia = false
        // errorCallback={errorCallback} // custom handle for error if useInertia = false
      />
    </div>
  )
}

export default ExampleTable
