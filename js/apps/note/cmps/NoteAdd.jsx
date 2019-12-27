
export default class NoteAdd extends React.Component {
    state = { txtInput: '', noteType: 'NoteText' }

    componentDidMount() {

    }
    inputChange = (ev) => {
        // ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ [field]: value })

    }
    addNote = () => {
        this.props.handleChange(this.state.txtInput, this.state.noteType)
        this.setState({ txtInput: '', noteType: 'NoteText' })
    }
    setPlaceholder=()=>{
        let placeholder=''
        switch(this.state.noteType) {
            case 'NoteTodos':
                placeholder='Write a the first todo..'
              break;
            case 'NoteImg':
                placeholder='Please enter a url img..'
              break;
            default:
                placeholder='Write a comment..'
          }
          return placeholder
    }
    


    render() {
        const noteType=this.state.noteType
        const placeholder= this.setPlaceholder()
        
        return (
            <section className="noteAdd-container flex">

                <input onChange={this.inputChange}
                    value={this.state.txtInput}
                    name="txtInput"
                    className="flex-grow"
                    type="text"
                    placeholder={placeholder}/>
                <label htmlFor="txt-add" name="NoteText"
                    className={noteType ==='NoteText'? 'black note-input-radio ':'note-input-radio'}>
                    <i className="fas fa-font"></i>
                </label>
                <label htmlFor="todos-add" name="NoteTodos"
                    className={noteType ==='NoteTodos'? 'black note-input-radio ':'note-input-radio'}>
                    <i className="fas fa-list-ul"></i>
                </label>
                <label htmlFor="img-add" name="NoteImg"
                    className={noteType ==='NoteImg'? 'black note-input-radio ':'note-input-radio'}>
                    <i className="far fa-image"></i>
                </label>

                <input id="txt-add" onChange={this.inputChange}
                    checked={this.state.noteType === 'NoteText'}
                    type="radio" name="noteType" value="NoteText" />
                <input id="img-add" onChange={this.inputChange}
                    checked={this.state.noteType === 'NoteImg'}
                    type="radio" name="noteType" value="NoteImg" />
                <input id="todos-add" onChange={this.inputChange}
                    checked={this.state.noteType === 'NoteTodos'}
                    type="radio" name="noteType" value="NoteTodos" />

                <button onClick={this.addNote}>Add</button>


            </section>
        )
    }
}
