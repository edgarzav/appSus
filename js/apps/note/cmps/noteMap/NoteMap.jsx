
class NoteMap extends React.Component {

    componentDidMount() {
        this.renderMap()
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAsAqgAOgYSK5tcvWVgrko0S1a8mJD4vgM&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
        const id = this.props.note.id
        const loction = this.props.note.info
        var map = new window.google.maps.Map(document.getElementById(`${id}`), {
            center: { lat: loction.lat, lng: loction.lng },
            zoom: 8
        })
    }
    render() {
        console.log(this.props)
        return <div
            style={{ backgroundColor: this.props.note.style.backgroundColor }}
            className="innerNote">
            <div id={this.props.note.id} 
            className="map"
            ></div>
        </div>
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}


export default NoteMap;
