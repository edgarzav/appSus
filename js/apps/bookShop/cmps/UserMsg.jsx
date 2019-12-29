import eventBusService from "../services/eventBusService";

export default class UserMsg extends React.Component {
    eventKiller = null;
    state = { display: false, book: null }

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (book) => {
            this.setState(prevState => ({ display: !prevState.display, book }))
            setTimeout(this.closeMsg, 3000)
        })
    }
    
    closeMsg = () => this.setState({ display: false })

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        if (!this.state.display) return null;

        return <div className="userMsg flex align-center justify-center display-column">
            <h2 className="userMsg-title">succsses!</h2>
            <p className="userMsg-content">Book {this.state.book.volumeInfo.title} was successfully added,</p>
            <a className="userMsg-link" href={`/#/books/${this.state.book.id}`}>Check it Out</a>
        </div >
    }
}