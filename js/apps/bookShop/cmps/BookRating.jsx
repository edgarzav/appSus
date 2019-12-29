import RatingStars from './RatingStars.jsx'
export default class BookRating extends React.Component {

    onDelete = () => this.props.onDeleteReview(this.props.review)


    render() {
        const { readerName, date, rate, text } = this.props.review

        return <div className="review-box">
            <span className="close-btn" onClick={this.onDelete}>X</span>
            <ul className="review-item">
                <li>Name: {readerName}</li>
                <li>Date: {date}</li>
                <li>Description: {text}</li>
                {/* <li> <RatingStars  rate={rate} name='rate'></RatingStars></li> */}

                <li>Rate: {rate} Stars</li>
            </ul>
        </div>
    }
}


