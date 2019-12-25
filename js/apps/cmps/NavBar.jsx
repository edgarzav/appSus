const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav>
        <ul className="nav-bar flex">
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/email'>Email</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/note'>Note</NavLink></li>
        </ul>
    </nav>
}