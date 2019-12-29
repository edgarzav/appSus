
export default class UpdateTodos extends React.Component {
    state = { todos: [] }
    componentDidMount() {
        this.loadTodos()
    }

    loadTodos = () => {
        const todos = [...this.props.note.info.todos]
        this.setState({ todos })
    }
   
    inputChange = async (ev) => {
        const index = ev.target.name
        const todos = this.props.note.info.todos
        const value = ev.target.value
        todos[index].txt = value
        await this.setState({ todos })
        const info = { ...this.props.note.info }
        info.todos = [...this.props.note.info.todos]
        this.props.handleChange({ ...info })
    }
    onAddNewTodo = () => {
        let todo = { txt: '', doneAt: null }
        let note = {...this.props.note}
        
        if (note.info.todos.length>0 && note.info.todos[note.info.todos.length - 1].txt === '') return
        note.info.todos.push(todo)
        this.props.onAddNewTodo(note)
       
    }

    onToggleDoneTodo = (event) => {
        this.props.onToggleDoneTodo(this.props.note.id, event.target.name)
    }

    setTime = (milSec) => {
        let date = new Date(milSec)
        let day = date.getDate();
        let month = date.getMonth() + 1
        let fullYear = date.getMonth()
        let hours = date.getHours();
        let min = date.getMinutes();

        return `done at: ${day}.${month}.${fullYear}| ${hours}:${min} `
    }
    onDeleteTodo = (event) => {
        this.props.onDeleteTodo(this.props.note.id, event.target.name)
    }


    render() {
        return <div className="flex-grow todos-update-container">
            <h3>Please update your todos</h3>
            <div className="add-todo-btn" onClick={this.onAddNewTodo}>
                <i className="fas fa-plus"></i>
            </div>
            <ul >
                {this.props.note.info.todos.map((todo, i) => {
                    const isDone = todo.doneAt ? 'done' : ''
                    return <li key={i} className="update-todos-li flex align-center">
                        <input className={isDone}
                            onChange={this.inputChange}
                            name={i}
                            type="txt"
                            defaultValue={todo.txt} />
                        <input type="checkbox"
                            defaultChecked={todo.doneAt !== null}
                            onChange={this.onToggleDoneTodo}
                            name={todo.id}
                        />
                        <label htmlFor={i} className="btn-delete-todo">
                            <i className="fas fa-trash" ></i>
                        </label>
                        <button className="delete-todo-btn-hack"
                            id={i}
                            onClick={this.onDeleteTodo}
                            name={todo.id}>
                        </button>
                        <span className="doneAt">
                            {todo.doneAt && this.setTime(todo.doneAt)}
                        </span>
                    </li>
                })}

            </ul>
        </div>
    }
}

