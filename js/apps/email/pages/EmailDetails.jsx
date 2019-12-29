import emailService from '../services/emailService.js'
import EmailPreviewNote from '../cmps/EmailPreviewNote.jsx'
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

    onReplayEmail = () => {
        this.props.onReplayEmail({ ...this.state.email })
    }

    onStarEmail = () => {
        this.props.onStarEmail(this.state.email.id)

    }

    render() {
        if (this.state.email) {
            const { subject, body, sentAt, to, data, type } = this.state.email
            return <div className={`${this.props.isShowDetails ?
                `show-mobile-details` : 'hide-mobile-details'} email-details-container flex`}>

                <div className="email-details">
                    <div className="details-title-container">
                        <h2 className="details-title">{subject}</h2>
                    </div>
                    <div className="details-content">

                        <button className="rubbish-bin-btn" onClick={this.onDeleteEmail}></button>
                        <button className="reply-btn" onClick={this.onReplayEmail}></button>
                        <button className="star-btn" onClick={this.onStarEmail}></button>
                        <div className="flex align-baseline">
                            <h2 className="details-name">{to.substring(0, to.indexOf('@'))} </h2>
                            <p className="details-address">{` <${to}>`}</p>
                        </div>
                        <p className="details-time">{new Date(sentAt).toLocaleDateString()}
                            {new Date(sentAt).toLocaleTimeString()}</p>

                        <EmailPreviewNote note={{ type: type, data: data }} />
                        <p className="details-body">{body}</p>
                    </div>
                </div>
            </div>
        } else return 'No Emails'
    }
}