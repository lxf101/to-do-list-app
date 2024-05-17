import {useState} from 'react'

function TodoInput(props){
    let {addTask} = props
    let [value, setValue] = useState('')

    function handleInput(event){
        setValue(event.target.value)
    }
    function handleAddTask(){
        if(value === ''){
            return
        }
        let taskObj = {"id": Date.now(), "text": value, "completed": false}

        addTask(taskObj)
        setValue('')
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleInput}/>
            <button onClick={handleAddTask}>Add</button>
        </div>
    )
}

export default TodoInput