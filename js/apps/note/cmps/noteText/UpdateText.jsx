
export default class UpdateText extends React.Component {
    
    componentDidMount() {
       
    }
    inputChange =  (ev) => {
        // ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        let txt={txt:value}
        this.props.handleChange(txt)
    }
    
    render() {
      
        return  <div className="flex-grow" >
            <input onChange={this.inputChange}  type="txt" defaultValue={this.props.note.info.txt} />
        </div>
    }
}
