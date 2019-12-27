
import noteService from '../services/noteService.js'
import NodeTools from '../cmps/NoteTools.jsx'
import UpdateText from '../cmps/noteText/UpdateText.jsx'
import UpdateImg from '../cmps/noteImg/UpdateImg.jsx'
import UpdateTodos from '../cmps/noteTodos/UpdateTodos.jsx'
export default class PageDetails extends React.Component {

    state = { note: {} }
    componentDidMount() {
        this.props.setScreenMode(true)
        this.loadNote();

    }
    componentWillUnmount() {
        this.props.setScreenMode(false)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadNote();
        }
    }

    loadNote = () => {
        const { id } = this.props.match.params;
        noteService.getNoteById(id).then(note => {
            this.setState({ note })
        })
    }
    onHandleChange = (noteInfo) => {
        const { id } = this.props.match.params;
        noteService.updateNote(id, noteInfo)
            .then()

    }
    getRightCmpToUpdate = () => {
        switch (this.state.note.type) {
            case 'NoteText':
                return <UpdateText note={this.state.note} handleChange={this.onHandleChange} />
            case 'NoteImg':
                return <UpdateImg note={this.state.note} handleChange={this.onHandleChange} />
            case 'NoteTodos':
                return <UpdateTodos note={this.state.note} handleChange={this.onHandleChange} />
            default:
                return //...some default error view
        }
    }
    close = () => {
        this.props.history.push('/note')

    }


    render() {
        if (!this.state.note.info) return <div>loading...</div>
        let updateValues = this.getRightCmpToUpdate()
        return (

            <section style={{ backgroundColor: this.state.note.style.backgroundColor }}
                className="details-container flex diraction-column"  >
                <div className="close-btn" onClick={this.close}>
                    <i className="fas fa-times"></i></div>
                {updateValues}
                <NodeTools note={this.state.note}
                    onChangeColor={this.props.onChangeColor}
                    onDelete={this.props.onDelete}
                    onPinned={this.props.onPinned}
                    className="note-details-tools-container" />
            </section>
        )
    }
}
