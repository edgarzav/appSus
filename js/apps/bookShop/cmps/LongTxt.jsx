export default class LongTxt extends React.Component {
    state = { text: '', isShowMore: false, showtext: 'show more' }

    onShowTxt = () => {
        if (!this.state.isShowMore) {
            this.setState({ isShowMore: true, showtext: 'show less' })
        } else this.setState({ isShowMore: false, showtext: 'show more' })
    }

    render() {
        const { isLongTxtShown, text } = this.props
        const { isShowMore, showtext } = this.state

        return <p>{isShowMore ? text : text.substr(0, 100)}{isLongTxtShown ?
            <span onClick={this.onShowTxt} className="show-more" > {showtext} </span> : ''}</p>
    }

}