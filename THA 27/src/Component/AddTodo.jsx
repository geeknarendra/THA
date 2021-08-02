import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Action";
import './style.css';


export default function AddTodo() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addItem({
      title: item,
      status: false
    }));
    setItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
        placeholder="Enter your Task Here"
        required />
      <button type="submit">
        <i class="fas fa-plus "></i>
      </button>

      
      
    </form>

  );
}
