
export default class EmailSideBar extends React.Component {

    render() {
        return <ul className="sideBar">
            <li onClick={this.props.onCompose}>Compose</li>
            <li>Inbox</li>
            <li>Starred</li>
            <li>Sent Mail</li>
            <li>drafts</li>
        </ul>

    }
}