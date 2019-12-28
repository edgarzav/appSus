import EmailPreview from './EmailPreview.jsx'
import EmailSortBy from './EmailSortBy.jsx'
export default class EmailList extends React.Component {
    state = { activeItemId: -1 }

    onSetActiveItem = (selectedId) => {
        this.setState({ activeItemId: selectedId })
    }

    render() {
        const { emails, emailType } = this.props
        return <div className="flex diraction-column email-list">
            <EmailSortBy onSortBy={this.props.onSortBy} />
            <div>{emails.map((email, i) => {
                return (email[emailType]) ? <EmailPreview
                    activeItemId={this.state.activeItemId}
                    onSetActiveItem={this.onSetActiveItem} key={i}
                    email={email} onReadToggle={this.props.onReadToggle} /> : ''
            })}
            </div>
        </div>
    }
}