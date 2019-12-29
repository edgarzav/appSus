import ColorPlate from './ColorPlate.jsx'
const { Link } = ReactRouterDOM
export default class NoteTools extends React.Component {
    state={dataToSend:''}
    componentDidMount(){
        this.setDataToString()
    }
    setDataToString=()=>{
        let noteData=this.props.note.info
        let key =Object.keys(noteData)[0]
        let noteDataStr=''
        if(this.props.note.type==='NoteTodos'){
            noteDataStr=noteData[key].map(todo=>{
                return `${todo.txt}`
            })
            noteDataStr=noteDataStr.join()
        }else{
            noteDataStr=noteData[key]
        }
        this.setState({dataToSend:noteDataStr})
    }

    onDelete = (event) => {
        event.stopPropagation();
        this.props.onDelete(this.props.note.id)
    }
    onPinned = () => {
        this.props.onPinned(this.props.note.id)
    }

    onChangeColor = (color) => {
        this.props.onChangeColor(color, this.props.note.id)
    }

    render() {
        return (
            <section className={this.props.className + " flex note-tools"} >
                <div onClick={this.onPinned}
                    className={this.props.note.isPinned === true ? 'black font-awsome-pinned' : 'font-awsome-pinned'}>
                    <i className="fas fa-thumbtack"></i>
                </div>
                <div onClick={this.onDelete} className="font-awsome-delete">
                    <i className="far fa-trash-alt"></i>
                </div>
                <div className="font-awsome-color">
                    <i className="fas fa-palette"></i>
                    <div className="color-plate">
                        <ColorPlate onChangeColor={this.onChangeColor} />
                    </div>
                </div>

                <Link to={`/email/?content=${this.state.dataToSend}&type=${this.props.note.type}`}>
                    <i className="far fa-envelope"></i>
                </Link>

            </section>
        )
    }
}
