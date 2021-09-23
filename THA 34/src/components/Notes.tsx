import React, { useState } from 'react'
import { addNote, deleteNote } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerType } from '../reducers'

const Notes = () => {

    const notes = useSelector((state: ReducerType) => state.notes)
    const [input, setInput] = useState<string>('')
    const dispatch = useDispatch()

    return (
        <div className='notes'>
            <h1>Note App</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value) } />
            <button onClick={() => {
                dispatch(addNote(input))
                setInput('')
            }}>Add</button>
            {notes.map((note: string, index: number) => (
                <ul key={index}>
                    <li>{note}</li>
                    <button onClick={() => dispatch(deleteNote(index))}>Delete</button>
                </ul>
            ))}
        </div>
    )
}

export default Notes
