
export default class UpdateTodos extends React.Component {
    state = { todos: [] }
    componentDidMount() {
        const todos=[...this.props.note.info.todos]
        this.setState({ todos })
    }

    inputChange = async (ev) => {
        // ev.preventDefault();
        const index = ev.target.name
        const todos = this.state.todos
        const value = ev.target.value
        todos[index].txt = value
        await this.setState({ todos })
        const info = {...this.props.note.info}
        info.todos=[...this.state.todos]
        this.props.handleChange({ ...info })
    }
    onAddNewTodo=()=>{
        let todo={txt:'',doneAt:null}
        let todos=[...this.state.todos]
        todos.push(todo)
        this.setState({todos})
    }


    render() {

        return <div className="flex-grow">
            <button onClick={this.onAddNewTodo}>Add new todo</button>
            <ul >
                {this.state.todos.map((todo, i) => {
                    return <li key={i}>
                        <input onChange={this.inputChange} name={i} type="txt" defaultValue={todo.txt} />
                    </li>
                })}

            </ul>
        </div>
    }
}

