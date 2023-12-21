import React from 'react'
import './input.scss'

const Input = (props) => {
  const { label, name, type, change } = props;

  return (
    <div className="form-input">
      <input
        name={name}
        type={type}
        placeholder={label}
        onChange={change}
      />
    </div>
  )
}

Input.defaultProps = {
  type: "text",
}

export default Input;