
export default class UpdateImg extends React.Component {
    
    state = { info: [] }
    componentDidMount() {
        const info={...this.props.note.info}
        this.setState({ info })
    }
    
    render() {
      console.log(this.state.info)
        return  <div className="updateImg-container flex diraction-column">
           <img src={this.state.info.url}  alt=""/>
           <input   type="txt" defaultValue="x"/>
        </div>
    }
}
