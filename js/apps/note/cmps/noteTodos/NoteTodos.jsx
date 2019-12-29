
export default class NoteTodos extends React.Component {
    onToggleDoneTodo=(event)=>{
        this.props.onToggleDoneTodo(this.props.note.id,event.target.id)
        event.preventDefault();
    }

    render() {
         
        return <ul style={{ backgroundColor: this.props.note.style.backgroundColor }}
            className="innerNote flex diraction-column">
            {this.props.note.info.todos.map((todo, i) => {
                const isDone = todo.doneAt ? 'done' : ''
                return <li className='todo-item ' key={i}>
                    <p className={isDone} onClick={this.onToggleDoneTodo} id={todo.id}>{todo.txt}</p>
                </li>
            })
            }
        </ul>

    }
}