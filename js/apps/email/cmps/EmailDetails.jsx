export default class EmailDetails extends React.Component {

    // onReadToggle = () => {
    //     this.props.onReadToggle()
    // }


    render() {
        const { subject, body, sentAt } = this.props.email

        return <div className="email-details">

            <h2>{subject}</h2>
            <p>{body}</p>
            <p>{sentAt}</p>

        </div>

    }
}