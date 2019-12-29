import eventBusService from '../../../services/eventBusService.js'

export default class UserMsg extends React.Component {
    eventKiller = null;
    state = { display: false, message: null }

    componentDidMount() {
        console.log('bus');
        
        this.eventKiller = eventBusService.on('toggleModalMessage', (message) => {
            this.setState(prevState => ({ display: !prevState.display, message }))
            setTimeout(this.closeMsg, 2000)
        })
    }
    
    closeMsg = () => this.setState({ display: false })

    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }

    render() {
        if (!this.state.display) return null;

        return <div className="userMsg flex align-center justify-center display-column">
            <p>{this.state.message}</p>
          </div>
    }
}