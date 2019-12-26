
export default function EmailSideNav(props) {
    return <ul>
        <li onClick={props.onCompose}><h2 className="compose-item">Compose</h2></li>
        <li className="side-nav-item">Inbox</li>
        <li className="side-nav-item">Starred</li>
        <li className="side-nav-item">Sent Mail</li>
        <li className="side-nav-item">drafts</li>
    </ul>

}