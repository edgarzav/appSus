
import noteService from '../services/noteService.js'
import NodeTools from '../cmps/NoteTools.jsx'
export default class NoteDetails extends React.Component {

    state = { note: {} }


    componentDidMount() {
        this.loadNote();

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadNote();
        }
    }

    loadNote=()=> {
        const { id } = this.props.match.params;
        noteService.getNoteById(+id).then(note => {
            console.log(note)
            this.setState({ note })
        })
    }


    render() {
        
         console.log(this.state.note.info)
        return (

            <section className="details-container flex diraction-column" >
                  <input className="flex-grow" type="txt" defaultValue="zz" />
                  <NodeTools className="note-details-tools-container"/>
            </section>
        )
    }
}
