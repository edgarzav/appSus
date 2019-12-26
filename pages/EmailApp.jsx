import EmailList from '../js/apps/email/cmps/EmailList.jsx'
import emailService from '../js/apps/email/services/emailService.js'
import EmailSideBar from '../js/apps/email/cmps/EmailSideBar.jsx'
import EmailCompose from '../js/apps/email/cmps/EmailCompose.jsx'
import eventBusService from '../services/eventBusService.js'
import EmailDetails from '../js/apps/email/pages/EmailDetails.jsx'
// import EmailSearch from '../js/apps/email/cmps/EmailSearch.jsx'
import EmailFilter from '../js/apps/email/cmps/EmailFilter.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
export default class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            subject: '',
            isRead: ''
        }
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        emailService.getEmails(this.state.filterBy).then(emails => {
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

    onSetFilter = (newFilterField) => {
        this.setState(prevstate => ({ filterBy: { ...prevstate.filterBy, ...newFilterField } }), this.loadEmails);
    }


    render() {
        return <div className="email-app flex">
            {/* const {searchBy, emails} = this.state */}
            <EmailCompose onSendEmail={this.onSendEmail} />
            <EmailSideBar onCompose={this.onCompose} />
            {/* <EmailSearch filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} /> */}
            <EmailFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
            <EmailList emails={this.state.emails} onReadToggle={this.onReadToggle} />
            <Router history={history}>
                <Switch>
                    <Route component={EmailDetails} path="/email/:id" exact></Route>
                </Switch>
            </Router>
        </div>
    }

}


