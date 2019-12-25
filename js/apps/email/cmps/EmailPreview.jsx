export default class EmailPreview extends React.Component {

    render() {
        const { subject, isRead } = this.props.email
        const boldClass = 'unBold'
        
        return <div className="flex">
            <h2 className={isRead ? boldClass : ''}>{subject}</h2>
        </div>

    }
}