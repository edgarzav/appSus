import eventBusService from "../../../../services/eventBusService.js";

export default class EmailSideBar extends React.Component {

    onCompose = () => {
        // booksService.addGoogleBook(book).then(book => {
            eventBusService.emit('toggleModal');
            // this.props.history.push("/books")
        // })
    }

    render() {

        return <ul className="sideBar">
            <li onClick={this.onCompose}>Compose</li>
            <li>Inbox</li>
            <li>Starred</li>
            <li>Sent Mail</li>
            <li>drafts</li>
        </ul>

    }
}