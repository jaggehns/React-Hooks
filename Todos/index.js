function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function Todo() {
  const [todos, setTodos] = React.useState([]); //Default empty array
  const [input, setInput] = React.useState(""); //Default empty string

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );

    setInput(""); //Clear input
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="New Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
