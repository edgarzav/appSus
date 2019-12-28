const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    onSetToggle = () => {
        const { id } = this.props.email
        this.props.onReadToggle(id)
    }

    onSetActiveItem = () => {
        const { id } = this.props.email
        this.props.onSetActiveItem(id)
    }

    render() {
        const { subject, isRead, id, to, body, sentAt } = this.props.email
        const isReaden = 'isReaden'
        const unReaden = 'unReaden'
        const time = new Date(sentAt)
        return <Link to={`/email/${id}`}>
            <div onClick={this.onSetActiveItem} className={`email-item flex align-baseline ${this.props.activeItemId === id ? `active-list-item` : ``} `}>
                <h2 className={`preview-sender-name  ${isRead ? isReaden : unReaden}`}>{to.substring(0, to.indexOf('@'))}</h2>
                <p className={`preview-subject ${isRead ? isReaden : unReaden}`}>{subject}</p>
                <p className={`preview-time ${isRead ? isReaden : unReaden}`}>{time.toLocaleTimeString()}</p>
                <p className="preview-body">{body}</p>
                <span className={`read-toggle-btn ${isRead ? isReaden : unReaden}`} onClick={this.onSetToggle}></span>

            </div>
        </Link>


    }
}