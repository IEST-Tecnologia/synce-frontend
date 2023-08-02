import React from 'react'

interface Props {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  [key: string]: any
}

const TextInput = ({
  value,
  onChange,
  placeholder,
  className,
  ...props
}: Props) => {
  return (
    <label className='w-full'>
      <input
        {...props}
        onChange={(e) => {
          if (onChange) onChange(e.target.value)
        }}
        placeholder={placeholder ? placeholder : 'Digite aqui...'}
        className={`focus-visible:outline-none border-neutral-300 font-sans border rounded-lg shadow-sm py-3 px-4 text-color-600 w-full ${className}`}
        value={value}
      />
    </label>
  )
}

export default TextInput
