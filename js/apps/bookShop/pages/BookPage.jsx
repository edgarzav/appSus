import booksService from '../services/booksService.js'
import BookDetails from '../cmps/BookDetails.jsx';
import bookService from '../services/booksService.js'
export default class BookPage extends React.Component {

    state = {
        book: null
    }
    componentDidMount() {
        this.loadBook();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadBook();
        }
    }

    onUnSelectBook = () => {
        this.props.history.push('/books')
    }

    loadBook() {
        const { id } = this.props.match.params;
        booksService.getBookById(id).then(book => {
            this.setState({ book })
        })
    }

    onDeleteRev = (review) => {
        booksService.deleteReview({ ...this.state.book }, review).then(book => {
            this.loadBook()
        })
    }

    onSaveReview = (review) => {
        const { id } = this.state.book
        bookService.addReview(id, review).then(review => {
            this.loadBook()
            // this.setState({book: book})
        })
    }

    onGoNextBook = () => {
        const { id } = this.state.book
        bookService.getNextBook(id).then(book => this.setState({ book: book }))
    }

    onGoPrevBook = () => {
        const { id } = this.state.book
        bookService.getPrevBook(id).then(book => this.setState({ book: book }))
    }




    render() {
        const { book } = this.state
        return (!book) ? <div className="loading">Loading...</div> :
            <BookDetails book={book} onDeleteRev={this.onDeleteRev}
                onSaveReview={this.onSaveReview}
                onUnSelectBook={this.onUnSelectBook}
                onGoNextBook={this.onGoNextBook} 
                onGoPrevBook={this.onGoPrevBook} />//merge prev and next functions
    }
}