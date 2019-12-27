const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    onSetToggle = () => {
        this.props.onReadToggle(this.props.email.id)
    }

    render() {
        const { subject, isRead, id, to, body, sentAt } = this.props.email
        const boldClass = 'bold'
        const unBoldClass = 'unBold'
        const time = new Date(sentAt)
        return <Link to={`/email/${id}`}>
            <div className={`email-item flex align-baseline ${isRead ? boldClass : unBoldClass}`}>
                <h2 className="preview-sender-name">{to.substring(0, to.indexOf('@'))}</h2>
                <p className={`preview-subject`}>{subject}</p>
                <p className="preview-time">{time.toLocaleTimeString()}</p>
                <p className="preview-body">{body}</p>
                <span className="read-toggle-btn" onClick={this.onSetToggle}></span>

            </div>
        </Link>


    }
}