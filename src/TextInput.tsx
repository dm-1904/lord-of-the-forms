import { ComponentProps } from "react";

export function TextInput({labelText, inputProps}: {labelText: string, inputProps: ComponentProps<"input">}) {
  return (
    <div>
    <label htmlFor='name'>{labelText}:</label>
    <input
      type="text"
      placeholder='john smith'
      {...inputProps}
      />
  </div>
  )
}
