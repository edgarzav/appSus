import EmailDetails from '../cmps/EmailDetails.jsx';
import emailService from '../services/emailService.js'

export default class EmailPage extends React.Component {
    state = { email: null }


    componentDidMount() {
        this.loadEmail();

    }

    componentDidUpdate(prevProps) {
        console.log('up');
        
        if (prevProps.match.params.id
            != this.props.match.params.id) {
                console.log('diff');
                
            this.loadEmail();
        }
    }

    loadEmail() {
        const { id } = this.props.match.params;

        emailService.getEmailById(id).then(email => {
            console.log(email);
            
            this.setState({ email })
        })
    }

    render() {
        console.log('render');
        
        console.log(this.state.email);
        
        if (this.state.email) {
            const { subject, body, sentAt } = this.state.email
            return <div className="email-details">
                <h2>{subject}</h2>
                <p>{body}</p>
                <p>{sentAt}</p>
            </div>
        } else return 'No Emails'


        // return email ? <EmailDetails email={email} onReadToggle={this.onReadToggle} /> : 'No Email'
    }
}