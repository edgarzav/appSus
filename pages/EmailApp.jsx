import EmailList from '../js/apps/email/cmps/EmailList.jsx'
import emailService from '../js/apps/email/services/emailService.js'
import EmailSideBar from '../js/apps/email/cmps/EmailSideBar.jsx'
import EmailCompose from '../js/apps/email/cmps/EmailCompose.jsx'
import eventBusService from '../services/eventBusService.js'
import EmailDetails from '../js/apps/email/pages/EmailDetails.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
export default class EmailApp extends React.Component {

    state = { emails: [] }

    componentDidMount() {
        // this.loadEmails();
    }

    loadEmails = () => {
        emailService.getEmails().then(emails => {
            this.setState({ emails })
        })
    }

    onReadToggle = (emailId) => {
        emailService.toggleReadMail(emailId).then(emails => {
            this.setState({ emails })
        })
    }

    onSendEmail = (email) => {
        emailService.addEmail(email).then(emails => {
            this.setState({ emails })
        })
    }

    onCompose = () => {
        eventBusService.emit('toggleModal');
    }


    render() {
        return <div className="email-app flex">
            <EmailCompose onSendEmail={this.onSendEmail} />
            <EmailSideBar onCompose={this.onCompose} />
            <EmailList emails={this.state.emails} onReadToggle={this.onReadToggle} />
            <Router history={history}>
                <Switch>
                    <Route component={EmailDetails} path="/email/:id" exact></Route>
                </Switch>
            </Router>
        </div>
    }

}


