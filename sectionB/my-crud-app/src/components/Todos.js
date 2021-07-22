import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Todos(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([])
  const title = useFormInput('');
  const description = useFormInput('');
  const completed = useFormInput('False')

  useEffect(()=>{
  const handleTodosFetch = () => {
    setError(null);
    setLoading(true);
    axios.get('/todos',{ headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5ueSIsImlhdCI6MTYyNjgyMjMxOSwiZXhwIjoxNjI2OTA4NzE5fQ.hx5QlW5Ne5g1u06DQeJOlW7UFkYBKa-JbKR31PjSKtk'
    }},).then(response => {
      setLoading(false);
    //   setUserSession(response.data.token, response.data.user);
      console.log("todos",response)
      setTodos(response.data.todos)
    //   props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      console.log("error :", error)
      if (error) setError(error);
      else setError("Something went wrong. Please try again later.");
    });
  }
      handleTodosFetch();
  },[])

  const handleTodoAdd = () => {
    setError(null);
    setLoading(true);
    axios.post('/todos', { title: title.value, description: description.value }, { headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5ueSIsImlhdCI6MTYyNjgyMjMxOSwiZXhwIjoxNjI2OTA4NzE5fQ.hx5QlW5Ne5g1u06DQeJOlW7UFkYBKa-JbKR31PjSKtk'
    }}).then(response => {
     
      console.log(response)
      props.history.push('/todos');
    }).catch(error => {
      setLoading(false);
      console.log("error :", error)
      if (error) setError(error);
      else setError("Something went wrong. Please try again later.");
    });
  }

  const handleDelete = (id)=>{
    axios.delete(`/todos/${id}/delete`, { headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5ueSIsImlhdCI6MTYyNjgyMjMxOSwiZXhwIjoxNjI2OTA4NzE5fQ.hx5QlW5Ne5g1u06DQeJOlW7UFkYBKa-JbKR31PjSKtk'
    }}).then(response => {
     
      console.log(response)
      props.history.push('/todos');
    }).catch(error => {
      setLoading(false);
      console.log("error :", error)
      if (error) setError(error);
      else setError("Something went wrong. Please try again later.");
    });
  }
  const handleUpdate = (id)=>{
    axios.delete(`/todos/${id}/update`,{ title: title.value, description: description.value, isCompleted: completed.value }, { headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5ueSIsImlhdCI6MTYyNjgyMjMxOSwiZXhwIjoxNjI2OTA4NzE5fQ.hx5QlW5Ne5g1u06DQeJOlW7UFkYBKa-JbKR31PjSKtk'
    }}).then(response => {
     
      console.log(response)
      props.history.push('/todos');
    }).catch(error => {
      setLoading(false);
      console.log("error :", error)
      if (error) setError(error);
      else setError("Something went wrong. Please try again later.");
    });
}
  return (
      <>
    <div>
<form>
      <input type="text" name="title" placeholder="Add todo ....." />
      <input type="text" name="description" placeholder="Add todo description....." />
      <input type="submit" value="Submit" className="btn" onClick={handleTodoAdd} />
    </form>
  </div>

<section>
{todos.map(todo => 
    (<>
 
            
        <div key={todo.id}>
                   {todo.title ?(
        <div className="todo-item">
        <p>
          <input type="checkbox" name="completed" />
          {" "}{todo.title}
          <button className="del">X</button>
        </p>
      </div>
       
    ):null} </div>


</>))}

    </section>
    <div>
</div>
   
    
    </>
  );
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
export default Todos;