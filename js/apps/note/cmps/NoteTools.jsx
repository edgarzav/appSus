
export default class NoteTools extends React.Component {

    

    render() {
        return (
            <section className="note-tools-container flex" >
            <label className="tools-btn" htmlFor="tools-pinned"><img className="tools-btn" src="../../../../../assets/img/notes/thumbtack-solid.svg" alt=""/></label>
            <label className="tools-btn" htmlFor="tools-delete"><img className="tools-btn" src="../../../../../assets/img/notes/trash-alt-solid.svg" alt=""/></label>
             <button id="tools-pinned" className="tools-pinned-btn"></button>
             <button id="tools-delete" className="tools-delete-btn"></button>
            </section>
        )
    }
}
