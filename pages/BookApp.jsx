import bookService from '../js/apps/bookShop/services/booksService.js'
import BooksList from '../js/apps/bookShop/cmps/BooksList.jsx'
import BookFilter from '../js/apps/bookShop/cmps/BookFilter.jsx';
import BookPage from '../js/apps/bookShop/pages/BookPage.jsx';
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
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
                    <Router history={history}>

                    <Switch>
                        {/* <Route component={BookApp} path="/books" exact ></Route> */}
                        <Route component={BookPage} path="/books/:id" exact></Route>
                        {/* <Route component={BookAdd} path="/bookAdd"  ></Route> */}
                    </Switch>
                </Router>

                </div>
            </section>
        )
    }
}