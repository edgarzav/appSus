import LongTxt from './LongTxt.jsx'
import ReviewAdd from './ReviewAdd.jsx';
import BookRating from './BookRating.jsx';
import util from '../services/util.js'

export default class BookDetails extends React.Component {

    onSelectBook = () => {
        const { onSelectBook, book } = this.props
        if (onSelectBook)
            onSelectBook(book);
    }

    getPageCount = () => {
        const { pageCount } = this.props.book
        if (pageCount > 500) {
            return 'Long reading'
        } else if (pageCount > 200) {
            return 'Long reading'
        } else return 'Light reading'
    }

    getPublishDate = () => {
        const { publishedDate } = this.props.book
        if (publishedDate > 10) {
            return 'Veteran book'
        } else if (publishedDate < 1) 'New!'
    }

    getColor = () => {
        const { amount } = this.props.book.listPrice
        return amount > 150 ? 'red' : 'green'
    }

    checkDescLength = () => {
        const { description } = this.props.book
        if (description) return description.length > 100 ? true : false
    }


    render() {
        const { title, listPrice, thumbnail, subtitle, description, rating } = this.props.book

        const priceStyle = { color: this.getColor() }
        return <div className="flex">
            <div className={`book-details flex display-column align-center ${this.getColor()}`} onClick={this.onSelectBook}>
                <h2 className="details-title">{title}</h2>
                <h4>Reading amount: {this.getPageCount()}</h4>
                <h4>{this.getPublishDate()}</h4>
                <h4>{subtitle}</h4>
                <h4 style={priceStyle}>{listPrice.amount} {util.getCurrencyIcon(listPrice.currencyCode)}</h4>
                <img className="details-img" src={thumbnail} />

                {(listPrice.isOnSale) ? <img className="sale-img" src="./assets/img/sale.png" /> : ''}
                <span className="details-desc">Description: </span>
                <LongTxt text={description} isLongTxtShown={this.checkDescLength()} />
                <div className="details-btns flex">
                    <button className="next-btn" onClick={this.props.onGoNextBook}>Next</button>
                    <button className="back-btn" onClick={this.props.onUnSelectBook}>Back</button>
                    <button className="prev-btn" onClick={this.props.onGoPrevBook}>Prev</button>
                </div>
                {/* merge prev and next functions */}
            </div>
            <div className="flex display-column align-center">
                <ReviewAdd onSaveReview={this.props.onSaveReview} bookId={this.props.book.id} />
                {rating ? rating.map((rate, i) => <BookRating key={i} onDeleteReview={this.props.onDeleteRev} review={rate} />) : 'No ratings yet'}

            </div>
        </div>
    }
} 