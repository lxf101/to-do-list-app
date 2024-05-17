import './App.css';
import Task from './components/Task'
import TodoInput from './components/TodoInput';
import {useState} from 'react'
import SelectTask from './components/SelectTask';

function App() {
  let [list, setList] = useState([])

  function addTask(newTask){
    setList([...list, newTask])
  }
  function onCompleted(id){
    list.forEach(item => {
      if(item.id === id){
        if(item.completed){
          return 
        }else{
          item.completed = !item.completed
        }
      }
    })
    let copyList = JSON.parse(JSON.stringify(list))
    setList(copyList)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoInput addTask={addTask} />
      <SelectTask />
      {list.length > 0 ? <Task list={list} onCompleted={onCompleted} /> : ''}
    </div>
  );
}

export default App;
