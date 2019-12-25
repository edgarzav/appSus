import EmailPreview from './EmailPreview.jsx'
export default function EmailList(props) {
    const { emails } = props

    return <div className="email-list" >{emails.map((email, i) => {
        return <EmailPreview key={i} email={email} onReadToggle={props.onReadToggle} />
    })}
    </div>
}