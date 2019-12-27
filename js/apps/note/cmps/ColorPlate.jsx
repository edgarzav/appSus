
export default class ColorPlate extends React.Component {

 state={colors:['white','yellow','red','orange','purple','pink','green','brown']}
    
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
