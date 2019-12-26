import ColorPlate from './ColorPlate.jsx'
export default class NoteTools extends React.Component {


    onDelete = (event) => {
        event.stopPropagation();
        this.props.onDelete(this.props.note.id)
    }
    onPinned = () => {
        this.props.onPinned(this.props.note.id)
    }

    onChangeColor = () => {
        console.log('change color')
    }

    render() {
        return (
            <section className={this.props.className + " flex note-tools"} >
                <div onClick={this.onPinned} className="font-awsome-pinned">
                    <i className="fas fa-thumbtack"></i>
                </div>
                <div onClick={this.onDelete} className="font-awsome-delete">
                    <i className="far fa-trash-alt"></i>
                </div>
                <div onClick={this.onChangeColor} className="font-awsome-color">
                    <i className="fas fa-palette"></i>
                    {/* <div className="color-plate">
                    <ColorPlate/>
                    </div> */}
                </div>


            </section>
        )
    }
}
