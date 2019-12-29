import Home from './pages/Home.jsx'
import EmailApp from './pages/EmailApp.jsx'
import NoteApp from './pages/NoteApp.jsx'
import BookApp from './pages/BookApp.jsx'
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
<<<<<<< HEAD
                        <Route path="/email" render={(props) => {return (        
                                    <EmailApp  {...props} 
                                    inputFilter={this.state.inputFilter}
                                    />
                                )}} />

                        <Route path="/note" render={(props) => {return (        
                                    <NoteApp  {...props} 
=======
                        <Route path="/email" render={(props) => {
                            return (
                                <EmailApp  {...props}
                                    inputFilter={this.state.inputFilter}
                                />
                            )
                        }} />
                        <Route path="/note" render={(props) => {
                            return (
                                <NoteApp  {...props}
>>>>>>> 867a0822ddce359eed4687f12c579d526f6bba56
                                    inputFilter={this.state.inputFilter}
                                />
                            )
                        }} />
                        <Route component={BookApp} path="/bookapp" exact></Route>
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