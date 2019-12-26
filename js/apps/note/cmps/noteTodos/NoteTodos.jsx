import NoteTools from '../NoteTools.jsx'
export default class NoteTodos extends React.Component {
    
    componentDidMount() {

    }
   
    render() {
      
        return  <div className="innerNote">{this.props.note.type}

          </div> 

    }
}