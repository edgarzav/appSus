
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
                <input onChange={this.inputChange} checked={this.state.noteType === 'NoteText'} type="radio" name="noteType" value="NoteText" />
                <input onChange={this.inputChange} checked={this.state.noteType === 'NoteTodos'} type="radio" name="noteType" value="NoteTodos" />
                <input onChange={this.inputChange} checked={this.state.noteType === 'NoteImg'} type="radio" name="noteType" value="NoteImg" />
            <button onClick={this.addNote}>Add</button>
            </section>
        )
    }
}
