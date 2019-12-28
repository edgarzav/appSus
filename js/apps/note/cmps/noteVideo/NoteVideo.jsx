
export default class NoteVideo extends React.Component {

    componentDidMount() {
    }

    render() {
        return <div
        style={{ backgroundColor: this.props.note.style.backgroundColor }}
            className="innerNote">
            <iframe  
            frameBorder="0" allowFullScreen
            src={this.props.note.info.url}>
            </iframe>
        </div>
    }
}
