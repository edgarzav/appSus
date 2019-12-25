
export default class EmailFilter extends React.Component {
    changeInput = (ev) => {
        console.log(ev.target.value);

        const value = ev.target.value;
        this.props.onSetFilter(value)
    }

    render() {
        return <select className="filter-select" name="" id="" onChange={this.changeInput}>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
        </select>


    }
}

