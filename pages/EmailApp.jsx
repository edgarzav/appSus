import EmailList from '../js/apps/email/cmps/EmailList.jsx'
import emailService from '../js/apps/email/services/emailService.js'
import EmailSideBar from '../js/apps/email/cmps/EmailSideBar.jsx'
import EmailCompose from '../js/apps/email/cmps/EmailCompose.jsx'
import eventBusService from '../services/eventBusService.js'
import EmailDetails from '../js/apps/email/pages/EmailDetails.jsx'
import EmailSearch from '../js/apps/email/cmps/EmailSearch.jsx'
import EmailFilter from '../js/apps/email/cmps/EmailFilter.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
export default class EmailApp extends React.Component {

    state = { emails: [], searchBy: '',filterBy: '' }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        emailService.getEmails(this.state.searchBy).then(emails => {
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

    onSetSearch = (newSearchField) => {
        this.setState(prevstate => ({ searchBy: newSearchField }), this.loadEmails);
    }

    onSetFilter= (newfFilterBy) =>{
        this.setState(prevstate => ({ filterBy: { ...prevstate.filterBy, ...newFilterField } }), this.loadBooks);
//not finished,merge the filterBy option 
    }


    render() {
        return <div className="email-app flex">
            {/* const {searchBy, emails} = this.state */}
            <EmailCompose onSendEmail={this.onSendEmail} />
            <EmailSideBar onCompose={this.onCompose} />
            <EmailSearch searchBy={this.state.searchBy} onSetSearch={this.onSetSearch} />
            <EmailFilter onSetFilter={this.onSetFilter}/>
            <EmailList emails={this.state.emails} onReadToggle={this.onReadToggle} />
            <Router history={history}>
                <Switch>
                    <Route component={EmailDetails} path="/email/:id" exact></Route>
                </Switch>
            </Router>
        </div>
    }

}


