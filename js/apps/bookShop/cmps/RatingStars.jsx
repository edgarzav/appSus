export default function RatingStars(props){
    return <div className="rate">
    <input type="radio" id="star5" checked={props.rate == 5} name="rate" value="5" onChange={props.handleChange} />
    <label htmlFor="star5" title="text">5 stars</label>
    <input type="radio" id="star4"  checked={props.rate == 4}  name="rate" value="4" onChange={props.handleChange} />
    <label htmlFor="star4" title="text">4 stars</label>
    <input type="radio" id="star3" checked={props.rate == 3}  name="rate" value="3" onChange={props.handleChange} />
    <label htmlFor="star3" title="text">3 stars</label>
    <input type="radio" id="star2"  checked={props.rate == 2}  name="rate" value="2" onChange={props.handleChange} />
    <label htmlFor="star2" title="text">2 stars</label>
    <input type="radio" id="star1"  checked={props.rate == 1}  name="rate" value="1" onChange={props.handleChange} />
    <label htmlFor="star1" title="text">1 star</label>
</div>
}