function SelectTask(props){
    let {handleSelected} = props

    function handleChange(flag){
        handleSelected(flag)
    }
    return (
        <div>
            <input type="radio" name="option" onChange={()=>handleChange(-1)}/>全部 
            <input type="radio" name="option" onChange={()=>handleChange(0)}/>未完成  
            <input type="radio" name="option" onChange={()=>handleChange(1)}/>已完成 
        </div>
    )
}

export default SelectTask