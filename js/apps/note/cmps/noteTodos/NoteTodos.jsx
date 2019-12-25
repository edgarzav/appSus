export default class NoteTodos extends React.Component {
    
    componentDidMount() {

    }
   
    render() {
      
        return   <li className="note-container clean-list"  >
          <div className="innerNote">{this.props.note.type}</div> 
        </li>
    }
}