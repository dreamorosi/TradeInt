import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: inline-block;
  vertical-align: top;
`

const Input = styled.input`
  display: block;
  border: 2px solid #fff;
  background: transparent;
  padding: 13px 20px;
  border-radius: 4px;
  font-size: 15px;
  color: #fff;
  @media (min-width: 800px) {
    margin-right: 28px;
  }
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`

export default class Field extends React.Component {
  constructor (props) {
    super(props)
    this.renderError = this.renderError.bind(this)
  }

  renderError () {
    const { errorMessage, hasError } = this.props
    if (errorMessage !== undefined) {
      if (hasError) {
        return errorMessage
      }
    }
  }

  render () {
    const { type, placeholder, value, handleChange, hasError, required } = this.props
    return (
      <Label>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          data-hasError={hasError}
          required={required}
        />
        {this.renderError()}
      </Label>
    )
  }
}
