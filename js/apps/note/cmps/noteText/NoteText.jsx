import NoteTools from '../NoteTools.jsx'
export default class NoteText extends React.Component {
    
    componentDidMount() {
       
    }
    render() {
      
        return   <li className="note-container clean-list" >
           <div className="innerNote "><p className="flex wrap">{this.props.note.info.txt}</p>
           <NoteTools/>
           </div>
            
        </li>
    }
}