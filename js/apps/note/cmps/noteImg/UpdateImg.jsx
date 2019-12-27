
export default class UpdateImg extends React.Component {
    
    state = { info: [] }
    componentDidMount() {
        const info={...this.props.note.info}
        this.setState({ info })
    }
    
    render() {
      console.log(this.state.info)
        return  <div>
           <img src={this.state.info.url} width="100" height="200" alt=""/>
        </div>
    }
}
