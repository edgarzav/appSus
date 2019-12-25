import eventBusService from "../../../../services/eventBusService.js";

export default class EmailCompose extends React.Component {
    eventKiller = null;
    state = { display: false, email: null }

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (email) => {
            this.setState(prevState => ({ display: !prevState.display, email }))
            // setTimeout(this.closeMsg, 3000)
        })
    }
    
    closeMsg = () => this.setState({ display: false })

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        if (!this.state.display) return null;
return <div className="compose-email">
    <h2 className="compose-title">Message</h2>
    <form className="flex diraction-column">
        <input type="text" placeholder="to" name="to" />
        <input type="text" placeholder="cc" name="to" />
        <input type="text" placeholder="subject" name="to" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </form>
    <button className="compose-btn">Send</button>
</div>
        // return <div className="userMsg flex align-center justify-center display-column">
        //     <h2 className="userMsg-title">succsses!</h2>
        //     <p className="userMsg-content">Book {this.state.book.volumeInfo.title} was successfully added,</p>
        //     <a className="userMsg-link" href={`/#/books/${this.state.book.id}`}>Check it Out</a>
        {/* </div > */}
    }
}