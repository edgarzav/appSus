import util from '../services/util.js'
const { Link } = ReactRouterDOM
export default class BookPreview extends React.Component {
    render() {
        const { title, listPrice, thumbnail, id } = this.props.book
        return <Link to={`/books/${id}`}>
            <div className="book-card flex display-column" onClick={this.onSelectBook}>
                <h2 className="book-title">{title}</h2>
                <h4 className="book-price">{listPrice.amount} {util.getCurrencyIcon(listPrice.currencyCode)}</h4>
                <img className="thumbnail" src={thumbnail} />
            </div>
        </Link>
    }
}