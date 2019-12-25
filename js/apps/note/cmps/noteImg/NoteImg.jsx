
export default class NoteImg extends React.Component {
    
    componentDidMount() {
        
    }
   
    render() {
      
        return   <li className="note-container clean-list"   >
          <div className="innerNote"><img src={this.props.note.info.url} alt=""/></div>  
        </li>
    }
}
