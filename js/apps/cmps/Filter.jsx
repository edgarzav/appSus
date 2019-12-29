export default function Filter(props){

    function inputChange(ev){
        const value = ev.target.value;
        props.handleChange(value)
    }

    return <div className="filter">
        <input type="text" value={props.inputFilter}
         name="name"
         placeholder='please enter input to search'
          onChange={inputChange}></input>
    </div>
}