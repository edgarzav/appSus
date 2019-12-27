import EmailPreview from './EmailPreview.jsx'
export default class EmailList extends React.Component {

    render() {
        const { emails, emailType } = this.props
        return <div className="email-list" >{emails.map((email, i) => {
            return (email[emailType]) ? <EmailPreview key={i} email={email} onReadToggle={this.props.onReadToggle} /> : ''
        })}
        </div>
    }
}