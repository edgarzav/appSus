import Home from './pages/Home.jsx'
import EmailApp from './pages/EmailApp.jsx'
import NoteApp from './pages/NoteApp.jsx'
import NavBar from './js/apps/cmps/NavBar.jsx'
import Footer from './js/apps/cmps/Footer.jsx'
// import EmailCompose from './js/apps/email/cmps/EmailCompose.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {
    render() {
        return (
            <main className="flex diraction-column">
                <Router history={history}>
                    <NavBar/>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={EmailApp} path="/email" ></Route>
                        <Route component={NoteApp} path="/note" ></Route>
                    </Switch>
                </Router>
                <Footer/>
            </main>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)