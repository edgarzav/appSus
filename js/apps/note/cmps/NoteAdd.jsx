
export default class NoteAdd extends React.Component {
    state = {}

    componentDidMount() {

    }



    render() {
        return (
            <section className="noteAdd-container flex">
                <input checked={false} className="flex-grow" type="text" placeholder="What's on your mind.." />
                <input type="radio" name="note" value="text" />
                <input type="radio" name="note" value="todos" />
                <input type="radio" name="note" value="img" />
            </section>
        )
    }
}
