import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  const[text,setText]=useState("");
  const[category,setCategory]=useState("code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text,category});
    setText("");
    setCategory("code");
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category"value={category} onChange={(e)=>setCategory(e.target.value) }>
          {categories.map((cat)=>(
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;