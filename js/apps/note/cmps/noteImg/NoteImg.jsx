
export default class NoteImg extends React.Component {

    componentDidMount() {

    }

    render() {

        return <div style={{ backgroundColor: this.props.note.style.backgroundColor }}
            className="innerNote">
            <img src={this.props.note.info.url} alt="" />
        </div>
    }
}
