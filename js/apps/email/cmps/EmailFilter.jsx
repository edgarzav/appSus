
export default class EmailFilter extends React.Component {
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.props.onSetFilter({ [field]: value })
    }

    render() {
        return <form className="flex align-center diraction-column">
            <select className="filter-select" name="isRead" id="" onChange={this.changeInput}>
                <option value=''>All</option>
                <option value={1}>Read</option>
                <option value={0}>Unread</option>
            </select>
        </form>
    }
}

