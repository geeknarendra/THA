
interface TodoListProps {
    title: string,
    done: boolean,
    id: number,
}

const TodoList = ({ title, done, id }: TodoListProps) => {

    return (
        <div className='todo-list'>
            <h2 className={done ? 'done' : 'not-done'}>{title}</h2>
        </div>
    )
}

export default TodoList
