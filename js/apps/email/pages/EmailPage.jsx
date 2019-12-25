import EmailDetails from '../cmps/EmailDetails.jsx';
import emailService from '../services/emailService.js'

export default class EmailPage extends React.Component {
    state = { email: null }


    componentDidMount() {
        this.loadEmail();

    }

    componentDidUpdate(prevProps) {
        console.log('update');
        console.log(prevProps);
        
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadEmail();
        }
    }


    loadEmail() {
        const { id } = this.props.match.params;

        emailService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }



    render() {
        const  {email}  = this.state
        return  email ? <EmailDetails email={email}/> : 'No Email'
       

    }
}