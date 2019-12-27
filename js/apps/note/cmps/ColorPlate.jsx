
export default class ColorPlate extends React.Component {

 state={colors:['#FFFF','#F6FE88','#C4B8FE','#FF7F50','#BC8F8F','#FFF8DC','#66CDAA','#FAC980']}
    
 onChangeColor=(event)=>{
     this.props.onChangeColor(event.target.id)
 }

    render() {
        return (
            <section  className="flex wrap justify-center" >
                {this.state.colors.map(color=>{
                   return <div id={color} onClick={this.onChangeColor} style={{backgroundColor: color}} key={color} className="color-plate-item"></div>
                })}
                
            </section>
        )
    }
}
