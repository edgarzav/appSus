const { NavLink } = ReactRouterDOM
import Filter from './Filter.jsx'
export default function NavBar(props) {
    return <nav className="nav-bar-container flex align-center">
        <ul className="nav-bar flex">
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/email'>Email</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/note'>Note</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/books'>Book Shop</NavLink></li>
        </ul>
        <Filter handleChange={props.handleChange} inputFilter={props.inputFilter} />
    </nav>
}