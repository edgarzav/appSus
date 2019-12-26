import NoteTools from '../NoteTools.jsx'
export default class NoteTodos extends React.Component {

    componentDidMount() {

    }

    render() {

        return <ul className="innerNote">
            {this.props.note.info.todos.map((todo, i) => {
                return <li key={i}>{todo.txt}</li>
            })
            }
        </ul>

    }
}