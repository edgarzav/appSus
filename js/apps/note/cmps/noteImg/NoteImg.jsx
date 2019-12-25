
export default class NoteImg extends React.Component {
    
    componentDidMount() {

    }
   
    render() {
      
        return   <li  >
            {this.props.note.type}
        </li>
    }
}
