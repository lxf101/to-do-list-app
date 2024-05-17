
function Task(props){
    let {list = [], onCompleted} = props

    function handleComplete(id){
        onCompleted(id)
    }
    return (
        <ul>
            {
                list.map(item => (
                    <li key={item.id}>
                        <span className={item.completed ? 'green' : ''}>{item.text}</span>
                        <span className={item.completed ? 'green' : ''}>{item.completed ? '（已完成）' : '（未完成）'}</span>
                        <button onClick={() => handleComplete(item.id)}>完成</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Task;