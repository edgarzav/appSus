
export default class EmailSearch extends React.Component {
    changeInput = (ev) => {
        const value = ev.target.value;
        this.props.onSetSearch(value)
    }

    render() {
        return <form >
            <input type="text" className="book-input" placeholder="search Email" value={this.props.searchBy}
                onChange={this.changeInput} name="text"></input>
        </form>
    }
}



