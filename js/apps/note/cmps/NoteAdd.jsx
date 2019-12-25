
export default class NoteAdd extends React.Component {
    state = { txtInput: '', noteType: 'NoteText' }

    componentDidMount() {

    }
    inputChange =  (ev) => {
        // ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
         this.setState({ [field]: value })
        
    }
    addNote=()=>{
        this.props.handleChange(this.state.txtInput, this.state.noteType)
        this.setState({txtInput:'',noteType:'NoteText'})
    }
    onBlurEvent=(ev)=>{
        ev.preventDefault();
        console.log('a')
        
        // this.setState({txtInput:'',noteType:'text'})
    }

    render() {

        return (
            <section  className="noteAdd-container flex">
                
                <input  onChange={this.inputChange} value={this.state.txtInput} name="txtInput" className="flex-grow" type="text" placeholder="What's on your mind.." />
                <label htmlFor="txt-add"><img className="note-input-radio" src="../../../../../../assets/img/notes/font-solid.svg" alt=""/></label>
                <label htmlFor="img-add"><img className="note-input-radio" src="../../../../../../assets/img/notes/image-regular.svg" alt=""/></label>
                <label htmlFor="txt-todos"><img className="note-input-radio" src="../../../../../../assets/img/notes/list-ul-solid.svg" alt=""/></label>
                <input id="txt-add" onChange={this.inputChange} checked={this.state.noteType === 'NoteText'} type="radio" name="noteType" value="NoteText" />
                <input id="todos-add" onChange={this.inputChange} checked={this.state.noteType === 'NoteTodos'} type="radio" name="noteType" value="NoteTodos" />
                <input id="img-add" onChange={this.inputChange} checked={this.state.noteType === 'NoteImg'} type="radio" name="noteType" value="NoteImg" />
            <button onClick={this.addNote}>Add</button>
            
           
            </section>
        )
    }
}
