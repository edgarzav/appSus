import RatingStars from './RatingStars.jsx'

export default class ReviewAdd extends React.Component {

    state = { readerName: '', date: '', rate: '', text: '' }

    onSave = () => {
        const { readerName, date, rate, text } = this.state
        
        this.props.onSaveReview({ readerName, date, rate, text })
        this.setState({ readerName: '', rate: '', date: '', text: '' })
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        const { readerName, date, text } = this.state

        return <div className="review-container">
            <form className="flex display-column">
                <input className="name-input" type="text" placeholder="book reader" name="readerName" onChange={this.inputChange} value={readerName} />
                <input className="date-input" type="date" name="date" id="" onChange={this.inputChange} value={date} />
                <textarea className="desc-input" name="" id="" cols="30" rows="10" name="text" placeholder="Your review" onChange={this.inputChange} value={text}></textarea>
                <RatingStars handleChange={this.inputChange} rate={this.state.rate} name='rate'></RatingStars>
                
            </form>
            <button className="rate-btn" onClick={this.onSave}>Submit</button>
        </div>
    }

}