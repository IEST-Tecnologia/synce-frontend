import React from 'react'

interface Props {
  value?: string
  onChange?: (value: string) => void
}

const TextInput = ({ value, onChange }: Props) => {
  return (
    <label>
      <input
        onChange={(e) => {
          if (onChange) onChange(e.target.value)
        }}
        className='focus-visible:outline-none border-neutral-300 font-sans border rounded-lg shadow-sm py-3 px-4 text-color-600 '
        value={value}
      />
    </label>
  )
}

export default TextInput
