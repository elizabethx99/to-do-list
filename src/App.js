import './App.css';
import imageOne from './imageOne.png'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={imageOne} width="200px" alt="shopping"/>
      </div>
      <div className="container">
      <h1>To Do List</h1>
      </div>
      <ToDoList/>
    </div>
  );
}

export default App;