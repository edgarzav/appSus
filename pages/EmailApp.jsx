import EmailList from '../js/apps/email/cmps/EmailList.jsx'
import EmailPage from '../js/apps/email/pages/EmailPage.jsx'
import emailService from '../js/apps/email/services/emailService.js'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
export default class EmailApp extends React.Component {

    state = { emails: [] }

    componentDidMount() {
        this.loadEmails();
    }

    // loadEmail = () => {

    // }

    loadEmails = () => {
        emailService.getEmails().then(emails => {
            this.setState({ emails })
        })
    }


    render() {
        const { emails } = this.state
        return <div className="email-app">
            <h2>email</h2>
        <EmailList emails={this.state.emails}/>
            <Router history={history}>
                <Switch>
                    <Route component={EmailPage} path="/email/:id" exact></Route>
                    {/* <Route render={(props) => {/* <EmailList emails={this.state.emails} {...props} />} */}
                        {/* path="/email" exact></Route> */} */}
                </Switch>
            </Router>
        </div>
    }

}

{/* <Route render={(props) => <CarAdd {...props} toggleModal={this.toggleModal} /> */ }

