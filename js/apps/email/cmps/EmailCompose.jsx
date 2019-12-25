import eventBusService from "../../../../services/eventBusService.js";
import booksService from "../services/emailService.js"
export default class EmailCompose extends React.Component {
    eventKiller = null;
    state = { display: false, to: '', cc: '', subject: '', body: '' }

    componentDidMount() {
        console.log(this.state.email);

        this.eventKiller = eventBusService.on('toggleModal', (em) => {
            this.setState(prevState => ({ display: !prevState.display, em }))
        })
    }

    closeMsg = () => this.setState({ display: false })

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
        console.log(this.state);

    }



    onSendEmail = () => {
        // addEmail()
        const { to, cc, subject, body } = this.state
        console.log('=');
        console.log(this.state);
        
        booksService.addEmail(to, cc, subject, body).then(emails => {
            console.log(emails);
        })
    }

    render() {
        const { to, cc, subject, body } = this.state
        console.log(this.state);

        if (!this.state.display) return null;
        return <div className="compose-email">
            <h2 className="compose-title">Message</h2>
            <form className="flex diraction-column">
                <input type="text" value={to} placeholder="to" name="to" onChange={this.inputChange} />
                <input type="text" value={cc} placeholder="cc" name="cc" onChange={this.inputChange} />
                <input type="text" value={subject} placeholder="subject" name="subject" onChange={this.inputChange} />
                <textarea name="" value={body} id="" cols="30" rows="10" name="body" onChange={this.inputChange}></textarea>
            </form>
            <button className="compose-btn" onClick={this.onSendEmail}>Send</button>
        </div>
    }
}