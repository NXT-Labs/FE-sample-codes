import React from 'react'
import { checkboxInput, selectInput, selectOption } from './model/inputModel'

export const FormInput = (props) => {
  return (
    <>
      {props.showLabel ? <label className="text-sm ">{props.label}</label> : ''}

      <input
        type={props.type ? props.type : ''}
        placeholder={props.placeholder ? props.placeholder : `placeholder`}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        max={props.max || ''}
        disabled={props.disabled}
      />
    </>
  )
}

export const SelectInput = (props: selectInput) => {
  return (
    <>
      {props.showLabel ? <label className="text-sm ">{props.label}</label> : ''}
      <select
        id={props.id || ''}
        onChange={props.onChange}
        value={props.value}
      >
        {
          props?.options?.map((op: selectOption) => {
            return (
              <option
                value={op.value}
                key={op.value}
              >{op.label}</option>
            )
          })
        }
      </select>
    </>
  )
}

export const CheckInput = (props: checkboxInput) => {
  return (
    <>
      {props.showLabel ? <label className="text-sm ">{props.label}</label> : ''}

      <input
        type={props.type ? props.type : ''}
        placeholder={props.placeholder ? props.placeholder : `placeholder`}
        id={props.id}
        checked={!!props.checked}
        onChange={props.onChange}
      />
    </>
  )
}