import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Home from '../Home'

storiesOf('Home', module)
  .add('Title', () => (
    <Home text='Hello World' />
  ))
