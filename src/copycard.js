import react ,{useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
const Card = (props)=>{
function clis(){
	props.clif(props.index);
}

return(<>
  <div className="col mb-4">
    <div className="card h-100 w-80 cont">
      <img src={props.img} className="card-img-top" alt="product image"style={{height:300}} />
      <div className="card-body">
        <h5 className="card-title">{props.tag}</h5>
        <p className="card-text">{props.des}.</p>
        <Button onClick={clis}>${props.link}</Button>
      </div>
    </div>
  </div>
	</>);

};

export default Card;
