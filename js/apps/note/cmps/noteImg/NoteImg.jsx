import NoteTools from '../NoteTools.jsx'
export default class NoteImg extends React.Component {
    
    componentDidMount() {
        
    }
   
    render() {
      
        return  <div className="innerNote"><img src={this.props.note.info.url} alt=""/>
          {/* <NoteTools note={this.props.note}/> */}
          </div>  
    }
}
