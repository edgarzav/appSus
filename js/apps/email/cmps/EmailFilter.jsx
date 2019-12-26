
export default class EmailFilter extends React.Component {
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.props.onSetFilter({ [field]: value })
    }

    render() {
        return <form >
            <input type="text" className="book-input" placeholder="search Email" value={this.props.filterBy.subject}
                onChange={this.changeInput} name="subject"></input>
            <select className="filter-select" name="isRead" id="" onChange={this.changeInput}>
                <option value=''></option>
                <option value={1}>Read</option>
                <option value={0}>Unread</option>
            </select>
        </form>
    }
}

