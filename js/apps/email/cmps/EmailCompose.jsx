import eventBusService from '../../../../services/eventBusService.js'
export default class EmailCompose extends React.Component {
    eventKiller = null;
    state = { display: false, to: '', cc: '', subject: '', body: '' }

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (email) => {
            this.setState(prevState => ({ display: !prevState.display, ...email }))
        })
        
    }

    closeCompose = () => this.setState({ display: false })

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
        this.setState({to: '', cc: '', subject: '', body: ''})
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }


    onSaveEmail = () => {
        const { to, cc, subject, body } = this.state
        this.props.onSendEmail({ to, cc, subject, body })
        
        this.closeCompose()
    }


    render() {
        const { to, cc, subject, body } = this.state

        if (!this.state.display) return null;
        return <div className="compose-email">
            <h2 className="compose-title">Message</h2>
            <form className="flex diraction-column">
                <input type="text" value={to} placeholder="to" name="to" onChange={this.inputChange} />
                <input type="text" value={cc} placeholder="cc" name="cc" onChange={this.inputChange} />
                <input type="text" value={subject} placeholder="subject" name="subject" onChange={this.inputChange} />
                <textarea name="" value={body} id="" cols="30" rows="10" name="body" onChange={this.inputChange}></textarea>
            </form>
            <button className="compose-btn" onClick={this.onSaveEmail}>Send</button>
        </div>
    }
}