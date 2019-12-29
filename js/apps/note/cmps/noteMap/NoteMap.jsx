
class NoteMap extends React.Component {


    componentDidMount() {
        // this.renderMap()
    }

    renderMap = () => {
        const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAsAqgAOgYSK5tcvWVgrko0S1a8mJD4vgM&libraries=geometry&sensor=false&callback=initMap"
            loadScript(url)
            window.initMap = this.initMap;
    }
 
    initMap = () => {
        let id = this.props.note.id
        let loction = this.props.note.info
        let map = new window.google.maps.Map(document.getElementById(`${id}`), {
            center: { lat: loction.lat, lng: loction.lng },
            zoom: 12
        })
        this.addMarker(loction, map)
    }
    addMarker = (location, map) => {
        new google.maps.Marker({
            position: location,
            map: map
        });
    }
    isMyScriptLoaded = (url) => {
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url) return true;
        }
        return false;
    }

    render() {
        return <div

            style={{ backgroundColor: this.props.note.style.backgroundColor }}
            className="innerNote innerNote-map">
            {/* <div id={this.props.note.id}
                className="map"
            ></div> */}
            {/* <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
             frameborder="0"
              scrolling="no"
               marginheight="0" 
               marginwidth="0">
                   </iframe> */}
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
