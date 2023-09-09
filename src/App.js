import './App.css';
import { TodoList } from './TodoList';
import image from'./1.jpg';
import imageTwo from'./2.jpg';

function App() {
  return (
    <div className='app'>
       <div className='conteiner'>
        <img src={image}width="220px"alt="todolist"/>
        </div>
        <div className='conteiner'>
        <h1>TO DO List</h1>
        </div>
        <TodoList/>
        <div className='conteiner'>
        <img src={imageTwo}width="220px"alt="list"/>
        </div>
    </div>
  );
}

export default App;
