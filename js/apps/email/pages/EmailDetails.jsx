import emailService from '../services/emailService.js'

export default class EmailDetails extends React.Component {
    state = { email: null }


    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            != this.props.match.params.id) {
            this.loadEmail();
        }
    }

    loadEmail() {
        const { id } = this.props.match.params;

        emailService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    onDeleteEmail = () => {
        this.props.onDeleteEmail(this.state.email.id)
    }

    onReplayEmail= () =>{        
        this.props.onReplayEmail({...this.state.email})
    }

    render() {
        if (this.state.email) {
            const { subject, body, sentAt } = this.state.email
            return <div  className="email-details-container flex">
                <button className="rubbish-bin-btn" onClick={this.onDeleteEmail}></button>
                <button className="reply-btn" onClick={this.onReplayEmail}></button>
                <div className="email-details">
                    <h2>{subject}</h2>
                    <p>{body}</p>
                    <p>{sentAt}</p>
                </div>
            </div>
        } else return 'No Emails'
    }
}