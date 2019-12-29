
export default class UpdateText extends React.Component {
    
    componentDidMount() {
       
    }
    inputChange =  (ev) => {
        const value = ev.target.value
        let txt={txt:value}
        this.props.handleChange(txt)
    }
    
    render() {
      
        return  <div className="text-update-container flex-grow flex align-center" >
             <h3>Please update your text</h3> 
            <input onChange={this.inputChange}  type="txt" defaultValue={this.props.note.info.txt} />
        </div>
    }
}
