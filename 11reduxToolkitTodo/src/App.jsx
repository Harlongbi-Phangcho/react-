import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-full max-w-md h-screen mx-auto text-center my-8">
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
