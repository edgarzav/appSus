export default class NoteText extends React.Component {
    
    componentDidMount() {
        console.log(this.props.note.type)
    }
    render() {
      
        return   <li  >
            {this.props.note.type}
        </li>
    }
}