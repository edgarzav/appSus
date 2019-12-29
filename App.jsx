import Home from './pages/Home.jsx'
import EmailApp from './pages/EmailApp.jsx'
import NoteApp from './pages/NoteApp.jsx'
import NavBar from './js/apps/cmps/NavBar.jsx'
import Footer from './js/apps/cmps/Footer.jsx'
import UserMsg from './js/apps/cmps/UserMsg.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {
    state = { inputFilter: '' }
    handleChange = (inputFilter) => {
        this.setState({ inputFilter })
    }
    render() {
        return (
            <main className="flex diraction-column">
                <Router history={history}>
                    <UserMsg />
                    <NavBar handleChange={this.handleChange} inputFilter={this.state.inputFilter} />
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route path="/email" render={(props) => {return (        
                                    <EmailApp  {...props} 
                                    inputFilter={this.state.inputFilter}
                                    />
                                )}} />

                        <Route path="/note" render={(props) => {return (        
                                    <NoteApp  {...props} 
                                    inputFilter={this.state.inputFilter}
                                    />
                                )}} />
                    </Switch>
                </Router>
                <Footer />
            </main>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)