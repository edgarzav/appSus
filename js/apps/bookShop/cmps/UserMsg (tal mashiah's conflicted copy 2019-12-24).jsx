import eventBusService from "../services/eventBusService";

export default class UserMsg extends React.Component {
    eventKiller = null;

    state = { display: false, book: null }

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (book) => {
            // Swal.fire(book)
            this.setState(prevState => ({ display: !prevState.display, book }))
        })
    }


    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        // case of swal - return null
        if (!this.state.display) return null;
        console.log(this.state.book);
        
        return <div>{this.state.book.title}</div >
    }
} 
{/* {this.state.book.title} */}