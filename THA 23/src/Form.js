import React,{useState} from 'react'

export default function useField(type) {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange,
      reset
    }
}