
export const increment = (num: number) => {
    return {
        type: 'INCREMENT',
        payload: num,
    }
}

export const decrement = (num: number) => {
    return {
        type: 'DECREMENT',
        payload: num,
    }
}

export const addNote = (note: string) => {
    return {
        type: 'ADD_NOTE',
        payload: note,
    }
}

export const deleteNote = (id: number) => {
    return {
        type: 'DELETE_NOTE',
        payload: id,
    }
}