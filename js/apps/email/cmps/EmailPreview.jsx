const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    onSetToggle = () => {
        this.props.onReadToggle(this.props.email.id)
    }

    render() {
        const { subject, isRead, body,id } = this.props.email
        const boldClass = 'bold'
        const unBoldClass = 'unBold'

        return <Link to={`/email/${id}`}>
            <div className={`email-item flex align-baseline ${isRead ? boldClass : unBoldClass}`}>
                <h2 className={`em-preview-subject`}>{subject}</h2>
                <p className="em-preview-body">{body}</p>
                <span onClick={this.onSetToggle}>#</span>

            </div>
        </Link>

       
    }
}