import React from 'react'
const FormInputs = (props) => {
  return (
    <>
      {props.showLabel ? <label className="text-sm ">{props.label}</label> : ''}

      <input
        type={props.type ? props.type : ''}
        placeholder={props.placeholder ? props.placeholder : `placeholder`}
        id={props.id}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </>
  )
}

export default FormInputs
