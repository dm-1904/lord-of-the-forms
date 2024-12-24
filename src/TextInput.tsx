export function TextInput({labelText, inputProps}) {
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
