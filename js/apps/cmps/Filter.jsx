export default class Filter extends React.Component{

    componentDidMount(){
        console.log(window.location.href )
    }
     inputChange=(ev)=>{
        const value = ev.target.value;
        this.props.handleChange(value)
    }

    render(){
        return <div className="filter">
        <input type="text" value={this.props.inputFilter}
         name="name"
         placeholder='please enter input to search'
          onChange={this.inputChange}></input>
    </div>
    }
    
}