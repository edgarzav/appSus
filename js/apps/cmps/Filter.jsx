export default class Filter extends React.Component{
    state={placeholder:''}

    setPlaceHolder=()=>{
        let params=window.location.href.split('/')
        console.log(params[params.length-1])
    }    
     inputChange=(ev)=>{
        const field = ev.target.name;
        const value = ev.target.value;
        this.props.handleChange({ [field]: value })
    }

    render(){
        return <div className="filter">
        <input type="text" value={this.props.inputFilter.value}
         name="subject"
         placeholder='please enter input to search'
          onChange={this.inputChange}></input>
    </div>
    }
    
}