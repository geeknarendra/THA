import { useSelector, useDispatch } from "react-redux";
import { removeItem, taskDone } from "../Action";
import './style.css';
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default function TodoList() {
  const todos = useSelector((state) => state.Todo);
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [displayStatus,setDisplayStatus]=useState("all")
  const [inProp, setInProp] = useState(false);
  const dispatch = useDispatch();

  const handleDisplay = () => {
    switch (displayStatus) {
      case "completed":
        setFilteredTodos(todos.filter(item => item.status === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(item => item.status === false))
        break;
      default:
        setFilteredTodos(todos)
    }

  }
  useEffect(()=>{
    handleDisplay();
    
  },[todos,displayStatus,])

  return (
    <div>
      <div className="select">
        <select name="todos" className="filter-todo"
         onChange={(e)=>setDisplayStatus(e.target.value)} >

          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <TransitionGroup className="todo-list">
        {filteredTodos.map((item, index) => (
          <CSSTransition
            key={index}
            timeout={5000}
            classNames="item"
          >
            <div key={index} style={{ display: "grid", gridTemplateColumns: ".5fr .05fr .1fr", alignItems: "center", width: "50%", margin: "0 35%" }}>
              <h5
                style={{ textAlign: "left",textDecorationLine:item.status?"line-through":"none" }}>{item.title}</h5>

              {item.status?
              <input
              type="checkbox"
              checked
              onClick={() => { dispatch(taskDone(index)) }} />
            :<input
            type="checkbox"
            onClick={() => { dispatch(taskDone(index)) }} />}
              

              <button
                class="btn btn-danger btn-sm"
                onClick={() => { dispatch(removeItem(index)) }}><i class="fas fa-trash "></i></button>

            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
