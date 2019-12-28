
export default class EmailSortBy extends React.Component {
    state = { isDate: false }

    onSortBy = () => {
        const { isDate } = this.state
        this.setState(prevstate => ({ isDate: !prevstate.isDate }))

        this.props.onSortBy(isDate ? 'sentAt' : 'subject')
    }

    render() {
        return <div className="sort-by-container flex">
            <h2 className="sort-by-title">Sort By: </h2>
            <div className="toggle-group">
                <input onChange={this.onSortBy} type="checkbox" name="on-off-switch" id="on-off-switch" tabIndex="1"></input>
                <label htmlFor="on-off-switch">
                    {/* <span className="aural">Show:</span> */}
                </label>
                <div className="onoffswitch pull-right" aria-hidden="true">
                    <div className="onoffswitch-label">
                        <div className="onoffswitch-inner"></div>
                        <div className="onoffswitch-switch"></div>
                    </div>
                </div>
            </div>
        </div>
    }
}