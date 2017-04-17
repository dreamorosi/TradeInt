import React from 'react'
import vow from 'vow'

import Field from '../Primitives/Field'
import Button from '../Primitives/Button'
import Subtitle from '../Primitives/Subtitle'

export default class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      text: {
        value: '',
        hasError: false
      },
      email: {
        value: '',
        hasError: false
      },
      sent: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateField (input) {
    const newState = this.state
    newState[input.type].hasError = !input.checkValidity()
    this.setState(newState)
  }

  debouncedChange (value, type) {
    var dfd = vow.defer()
    var timerId = this.timerId
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(((innerName) => () => dfd.resolve(innerName))(), 750)
    this.timerId = timerId
    return dfd.promise()
  }

  handleChange (e) {
    const input = e.currentTarget
    const self = this
    this.debouncedChange().then(() => self.validateField(input))
    let newState = this.state
    newState[input.type].value = input.value
    this.setState(newState)
  }

  handleSubmit (e) {
    e.preventDefault()
    const { text, email } = this.state
    if (!text.hasError && !email.hasError) {
      let mail = `email=${encodeURIComponent(email.value)}`
      let fullName = `fullName=${encodeURIComponent(text.value)}`
      let url = `http://192.185.63.170/dev/?${mail}&${fullName}`
      window.fetch(url).then(response => response.json())
      .then(data => {
        let newState = this.state
        newState.sent = true
        this.setState(newState)
      })
    }
  }

  render () {
    const { thanks, textInput, emailInput, button } = this.props
    const { text, email, sent } = this.state
    return (
      <div>
        { sent ? (
          <Subtitle>{thanks}</Subtitle>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <Field
              type='text'
              placeholder={textInput}
              value={text.value}
              hasError={text.hasError}
              handleChange={this.handleChange}
              pattern='([A-z0-9À-ž\s]){2,}'
              required
            />
            <Field
              type='email'
              placeholder={emailInput}
              value={email.value}
              hasError={email.hasError}
              handleChange={this.handleChange}
              required
            />
            <Button type='submit'>{button}</Button>
          </form>
        )
      }
      </div>
    )
  }
}
