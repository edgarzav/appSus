import Home from './pages/Home.jsx'
import EmailApp from './js/apps/email/pages/EmailApp.jsx'
import NoteApp from './js/apps/note/pages/NoteApp.jsx'
import NavBar from './js/apps/cmps/NavBar.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {
    render() {
        return (
            <main>
                <Router history={history}>
                    <NavBar/>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={EmailApp} path="/email" exact></Route>
                        <Route component={NoteApp} path="/note" exact></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)