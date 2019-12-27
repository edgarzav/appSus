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

    onStarEmail = () =>{
        this.props.onStarEmail(this.state.email.id)
    }

    render() {
        if (this.state.email) {
            const { subject, body, sentAt } = this.state.email
            return <div  className="email-details-container flex">
                <div className="email-details">
                    <h2>{subject}</h2>
                <button className="rubbish-bin-btn" onClick={this.onDeleteEmail}></button>
                <button className="reply-btn" onClick={this.onReplayEmail}></button>
                <button className="star-btn" onClick={this.onStarEmail}></button>
                    <p>{new Date(sentAt).toLocaleDateString()}</p>
                    <p>{new Date(sentAt).toLocaleTimeString()}</p>
                    <p className="details-body">{body}</p>
                </div>
            </div>
        } else return 'No Emails'
    }
}