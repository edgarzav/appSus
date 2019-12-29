const { NavLink } = ReactRouterDOM
import Filter from './Filter.jsx'
export default class NavBar extends React.Component {
    state={toggleMenu:'menu-out'}
    openMenu=()=>{
        this.setState({toggleMenu:'menu-in'})
    }
    closeMenu=()=>{
        this.setState({toggleMenu:'menu-out'})
    }

    render(){
        return <nav onBlur={this.closeMenu} className="nav-bar-container flex align-center" tabIndex="1">
        <ul  className={"nav-bar flex "+this.state.toggleMenu}>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/email'>Email</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/note'>Note</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to='/bookapp'>Book Shop</NavLink></li>
        </ul>
        <Filter handleChange={this.props.handleChange} inputFilter={this.props.inputFilter} />
       <div onClick={this.openMenu}  className="hamburger-btn">
       <i className="fas fa-bars"></i>
       </div>
    </nav>
    }
    
}