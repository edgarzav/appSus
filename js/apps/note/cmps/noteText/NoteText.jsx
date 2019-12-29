
export default class NoteText extends React.Component {

    componentDidMount() {
        
    }

    render() {

        return <div style={{backgroundColor: this.props.note.style.backgroundColor}}
         className="innerNote ">
            <p className="flex wrap">{this.props.note.info.txt}</p>
        </div>
    }
}

