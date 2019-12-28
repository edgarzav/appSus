
export default class UpdateVideo extends React.Component {
    
    state = { txtInput: this.props.note.info.url}
    
    inputChange = (ev) => {
        const value = ev.target.value
        this.setState({txtInput: value })
    }

    onChangeVideo=()=>{
        this.props.onChangeVideo(this.props.note.id,this.state.txtInput)
    }
    
    render() {
        return  <div className="updateImg-container flex diraction-column">
           <iframe  
            frameBorder="0" allowFullScreen
            src={this.props.note.info.url}>
            </iframe>
           <div className="flex margin-top-small">
           <input  onChange={this.inputChange} type="txt" defaultValue={this.state.txtInput}/>
           <button onClick={this.onChangeVideo} className="add-btn" >add</button>
           </div>
           
        </div>
    }
}
