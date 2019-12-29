export default function Filter(props){

    function inputChange(ev){
        const field = ev.target.name;
        const value = ev.target.value;
        props.handleChange({ [field]: value })
    }

    return <div className="filter">
        <input type="text" value={props.inputFilter.value}
         name="subject"
         placeholder='please enter input to search'
          onChange={inputChange}></input>
    </div>
}