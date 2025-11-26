import React from "react"

interface FormFieldInterface {
  placeholder: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  labelName?: string | null
  className?: string
  value?: string
  name: string
}
const FormField = ({
  placeholder,
  onChange,
  labelName,
  name,
  value,
  className,
}: FormFieldInterface) => {
  return (
    <>
      <div className={className}>
        <label htmlFor={name}>
          {labelName}
          <input
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </label>
      </div>
    </>
  )
}

export default FormField
