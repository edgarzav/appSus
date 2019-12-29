import bookService from '../services/booksService.js'
import BooksList from '../cmps/BooksList.jsx'
import BookFilter from '../cmps/BookFilter.jsx';
export default class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: {
            title: '',
            price: 200,
        }
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        bookService.getBooks(this.state.filterBy).then(books => {
            this.setState({ books })
        })
    }

    onSetFilter = (newFilterField) => {
        this.setState(prevstate => ({ filterBy: { ...prevstate.filterBy, ...newFilterField } }), this.loadBooks);

    }

    render() {
        const { filterBy, books } = this.state
        return (
            <section>
                <div>
                    <BookFilter filterBy={filterBy} onSetFilter={this.onSetFilter} />
                    <BooksList books={books}></BooksList>
                </div>
            </section>
        )
    }
}