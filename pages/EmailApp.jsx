import EmailList from '../js/apps/email/cmps/EmailList.jsx'
import EmailPage from '../js/apps/email/pages/EmailPage.jsx'
import emailService from '../js/apps/email/services/emailService.js'
import EmailSideBar from '../js/apps/email/cmps/EmailSideBar.jsx'
import EmailCompose from '../js/apps/email/cmps/EmailCompose.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
export default class EmailApp extends React.Component {

    state = { emails: [] }

    componentDidMount() {
        this.loadEmails();
    }


    loadEmails = () => {
        emailService.getEmails().then(emails => {
            this.setState({ emails })
        })
    }

    onReadToggle = (emailId) =>{
        console.log('toggle');
        
        emailService.toggleReadMail(emailId).then(emails=>{
            console.log(emails);
            
            this.setState({ emails })
        })
    }


    render() {
        return <div className="email-app flex">
            <EmailCompose/>
            <EmailSideBar />
            <EmailList  emails={this.state.emails} onReadToggle={this.onReadToggle}/>
            <Router history={history}>
                <Switch>
                    <Route component={EmailPage} path="/email/:id" exact></Route>
                </Switch>
            </Router>
        </div>
    }

}


