export default class GoogleItemPreview extends React.Component {

    onAddBookFromGoogle = () =>{
        this.props.onAddGoogleBook(this.props.book)
    }
    render() {
        return <li className="googleSearch-item">
            {this.props.book.volumeInfo.title} <span onClick={this.onAddBookFromGoogle} className="addBook-btn">+</span></li>

    }
}