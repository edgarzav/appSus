import EmailList from '../js/apps/email/cmps/EmailList.jsx'
import EmailDetails from '../js/apps/email/cmps/EmailDetails.jsx'
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

    loadEmails = () => {
        emailService.getEmails().then(emails => {
            this.setState({ emails })
            // console.log(emails);

        })
    }


    render() {
        console.log(this.props);
        const props= this.props
        const emails = this.state.emails
        return <div>
            <h2>email</h2>
            {/* <EmailList emails={emails}></EmailList> */}
            <Router history={history}>
                {/* <NavBar/> */}
                <Switch>
                    {/* <Route component={EmailList} path="/email/" exact></Route> */}
                    <Route component={EmailDetails} path="/details/:id" exact></Route>
                    <Route render={(props) => <EmailList {...props} />} path="/email/" exact></Route>

                </Switch>
            </Router>
        </div>
    }

}

{/* <Route render={(props) => <CarAdd {...props} toggleModal={this.toggleModal} /> */ }

