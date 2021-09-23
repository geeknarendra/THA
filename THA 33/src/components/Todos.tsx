import { useState, useContext } from 'react'
import TodoList from './TodoList'
import ThemeContext from './ThemeContext'
import { ThemeContextType } from './ThemeContext'

export interface TodoType {
    title: string,
    done: boolean
  }

const Todos = () => {

    const [todos, setTodos] = useState<TodoType[]>([])
    const {theme, setTheme } = useContext<ThemeContextType>(ThemeContext)
    const [input, setInput] = useState<string>('')

    return (
        <div className={theme ? 'todos' : 'todos dark'}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={() => {
                setTodos([
                    ...todos,
                    {title: input, done: false}
                ])
                setInput('')
            }}>Add Todo</button>
            {todos.map((todo, index) => (
                <TodoList key={index} title={todo.title} done={todo.done} id={index} />
            ))}
        </div>
    )
}

export default Todos
