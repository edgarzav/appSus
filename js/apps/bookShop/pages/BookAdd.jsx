import searchBookService from "../services/searchBookService.js";
import GoogleItemPreview from "../cmps/googleItemPreview.jsx";
import booksService from "../services/booksService.js";
import eventBusService from "../services/eventBusService.js";

export default class BookApp extends React.Component {

    state = { books: [], }

    inputChange = (ev) => {
        ev.preventDefault();
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ [field]: value })

    }
    onSearchBook = (ev) => {
        ev.preventDefault();
        searchBookService.getBooks(this.state.title).then(books => {
            this.setState({ books })
        })
    }

    onAddGoogleBook = (book) => {
booksService.addGoogleBook(book).then(book=>{
    eventBusService.emit('toggleModal' , book);
    this.props.history.push("/books")
}) 
    }

    render() {
        return <form>
            <h2>Add book</h2>
            <input type="text" value={this.state.title} name="title" onChange={this.inputChange}></input>
            <button onClick={this.onSearchBook}>search</button>
            <ul>
                {this.state.books ? this.state.books.map(
                    (book, i) => <GoogleItemPreview key={i} book={book} onAddGoogleBook={this.onAddGoogleBook} />)
                     : 'No books yet'}
            </ul>
        </form>
    }
}