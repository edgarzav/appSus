import EmailSideNav from "./EmailSideNav.jsx";
import EmailFilter from "./EmailFilter.jsx"
import EmailCompose from '../cmps/EmailCompose.jsx'

export default class EmailSideBar extends React.Component {

    render() {
        return <div className="side-bar flex diraction-column align-center">

            <EmailFilter filterBy={this.props.filterBy} onSetFilter={this.props.onSetFilter} />
              <EmailCompose onSendEmail={this.props.onSendEmail} />
            <EmailSideNav onCompose={this.props.onCompose} />
        </div>

    }
}