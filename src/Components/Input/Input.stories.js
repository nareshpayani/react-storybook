import React from 'react'
import InputComponent from './Input'

export default {
  title: 'Form/Input',
  component: InputComponent
}

export const Small = () => <InputComponent size='small' placeholder='Small size' />
export const Medium = () => <InputComponent size='medium' placeholder='Medium size' />
export const Large = () => <InputComponent size='large' placeholder='Large size' />

Small.storyName = 'Small Input'
Medium.storyName = 'Medium Input'
Large.storyName = 'Large Input'