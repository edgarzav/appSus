
class NoteMap extends React.Component {


    render() {
        return <div

            style={{ backgroundColor: this.props.note.style.backgroundColor }}
            className="innerNote innerNote-map">
             <iframe width="220" height="300" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.props.note.info.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
             frameBorder="0"
              scrolling="no"
               marginHeight="0" 
               marginWidth="0">
                   </iframe> 
        </div>
    }
}

export default NoteMap;
