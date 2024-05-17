import './App.css';
import Task from './components/Task'
import TodoInput from './components/TodoInput';
import {useState} from 'react'
import SelectTask from './components/SelectTask';

function App() {
  let [list, setList] = useState([])
  let [originList, setOriginList] = useState([])

  function addTask(newTask){
    setList([...list, newTask])
    setOriginList(JSON.parse(JSON.stringify(list)))
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
    setOriginList(JSON.parse(JSON.stringify(copyList)))
  }
  function handleSelected(flag){
    if(flag === -1){
      setList(originList)
    }else if(flag === 0){
      let resultArr = []
      originList.forEach(item => {
        if(!item.completed){
          resultArr.push(item)
        }
      })
      setList(resultArr)
    }else if(flag === 1){
      let resultArr = []
      originList.forEach(item => {
        if(item.completed){
          resultArr.push(item)
        }
      })
      setList(resultArr)
    }
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoInput addTask={addTask} />
      <SelectTask handleSelected={handleSelected}/>
      {list.length > 0 ? <Task list={list} onCompleted={onCompleted} /> : ''}
    </div>
  );
}

export default App;
