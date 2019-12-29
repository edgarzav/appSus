import eventBusService from '../../../../services/eventBusService.js'
export default class EmailCompose extends React.Component {
    eventKiller = null;
    state = { display: false, minimize: false, isDraft: false, to: '', cc: '', subject: '', body: '' }

    componentDidMount() {
        this.eventKiller = eventBusService.on('toggleModal', (email) => {
            this.setState(prevState => ({ display: !prevState.display, ...email }))
            if(email.type === "NoteTodos")
            console.log(email.info.todos);
        })
    }
    
    
    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
        this.setState({ to: '', cc: '', subject: '', body: '' })
    }
    
    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }
    
    
    onSaveEmail = () => {
        const { to, cc, subject, body, isDraft } = this.state
        this.props.onSendEmail({ to, cc, subject, body, isDraft })
        this.setState({ to: '', cc: '', subject: '', body: '' })
        this.closeCompose()
    }

    closeCompose = () => this.setState({ display: false })

    onCloseMsg = () => {
        if (this.state.to) {
            eventBusService.emit('toggleModalMessage', 'Email was saved to drafts');
            this.setState(({ isDraft: true }), this.onSaveEmail)
        }
        this.closeCompose()

    }


    onToggleMinimizeMsg = () => {
        this.setState({ minimize: !this.state.minimize })
    }


    render() {
        const { to, cc, subject, body } = this.state
        return <div className={`${!this.state.display ? 'hide-compose' : ''}
        ${this.state.minimize ? 'minimize-compose' : ''} compose-email`}>
            <h2 className="compose-title">Message</h2>
            <button onClick={this.onCloseMsg} className="close-msg-btn"></button>
            <button onClick={this.onToggleMinimizeMsg} className="minimize-msg-btn"></button>
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