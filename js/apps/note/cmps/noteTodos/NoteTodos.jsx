export default class NoteTodos extends React.Component {
    
    componentDidMount() {

    }
   
    render() {
      
        return   <li  >
           {this.props.note.type}
        </li>
    }
}