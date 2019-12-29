const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav>
        <ul className="nav-bar flex">
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/books'>Books</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/about'>About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/bookAdd'>Add book</NavLink></li>
        </ul>
    </nav>
}