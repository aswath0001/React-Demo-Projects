import { useState } from "react";
import '../Style.css';

const ToDoList = () => {
    const[todo, setToDo] = useState([]);
    const [input, setInput] = useState('');
    const handleSubmit = () => {
        setToDo((todo) => {
           return todo.concat({
                text:input,id:Math.floor(Math.random() * 10),
            });
        });
        setInput('');
    };
    const removetodo = id => setToDo(todo => todo.filter(t => t.id !=id));
  return (
    <div className="container">
      <input type="text" placeholder="New ToDo" value ={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todo.map(({text,id}) => (
            <li className="todo" key={id}>
                <span>{text}</span>
                <button className="close" onClick={() => removetodo(id)}>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList;