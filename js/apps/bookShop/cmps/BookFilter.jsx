export default class BookFilter extends React.Component {

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'range') ? +ev.target.value : ev.target.value;
        this.props.onSetFilter({[field]: value})
    }

    render() {
        const { price, title ,fromPrice,toPrice} = this.props.filterBy
        return <div className="filter-container flex justify-center align-center">
            <input type="text" className="book-input" placeholder="Book title" value={title}
                onChange={this.changeInput} name="title"></input>
            <input type="range" className="price-range" onChange={this.changeInput} value={price} name="price" min="0" max="200"></input>
            <label >Price: {price}</label>
        </div>
    }
}

