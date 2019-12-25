export default class EmailDetails extends React.Component {

    render() {
        const { subject, body, sentAt } = this.props.email

        return <div className="flex">
            <h2>{subject}</h2>
            <p>{body}</p>
            <p>{sentAt}</p>
        </div>

    }
}