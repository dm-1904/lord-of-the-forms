import { useRef, useState } from 'react'
import './App.css'
import { TextInput } from './TextInput'
import { PhoneInput } from './PhoneInput'

function App() {
  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
  const [sloganInput, setSloganInput] = useState("")

  const nameRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setNameInput("")
    setAgeInput("")
    setSloganInput("")
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          reset();
        }}
      >
        <button
          onClick={() => {
            nameRef.current?.focus()
          }}
        >
          Scroll to Slogan
        </button>
        <h3>Information form</h3>
        <TextInput
          inputProps={{
            onChange: (e) => {
              setNameInput(e.target.value)
            },
            value: nameInput,
            placeholder: "Rick Sanchez",
            ref: nameRef,
          }}
          labelText={"Name"}
        />
        <TextInput
          inputProps={{
            onChange: (e) => {
              setAgeInput(e.target.value)
            },
            value: sloganInput,
            placeholder: "53"
          }}
          labelText={"Age"}
        />
        <TextInput
          inputProps={{
            onChange: (e) => {
              setSloganInput(e.target.value)
            },
            value: ageInput,
            placeholder: "I'm Pickle Rick!"
          }}
          labelText={"Slogan"}
        />
        <PhoneInput />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
