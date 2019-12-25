
export default class NoteTools extends React.Component {
    
    state={note:{}}
    componentDidMount() {
         console.log(this.props.note);
        this.setState({note:this.props.note})
    }


    onDelete = (e) => {
        console.log(this.props.note);
    }

    render() {
        
        return (
           
            <section className={this.props.className+" flex"} >
                <label className="tools-btn" htmlFor="tools-pinned"><img className="tools-btn" src="../../../../../assets/img/notes/thumbtack-solid.svg" alt="" /></label>
                <label className="tools-btn" htmlFor="tools-delete"><img className="tools-btn" src="../../../../../assets/img/notes/trash-alt-solid.svg" alt="" /></label>
                <button id="tools-pinned" className="tools-pinned-btn"></button>
                <button onClick={this.onDelete} id="tools-delete" className="tools-delete-btn" ></button>
            </section>
        )
    }
}
