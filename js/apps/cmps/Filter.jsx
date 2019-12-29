export default class Filter extends React.Component {

    inputChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.props.handleChange({ [field]: value })
    }

    render() {
        return <div className="filter-container">
            <input className="filter" type="text" value={this.props.inputFilter.value}
                name="subject"
                placeholder='please enter input to search'
                onChange={this.inputChange}></input>
        </div>
    }

}