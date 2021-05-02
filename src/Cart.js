import react ,{useState,useEffect} from "react";
import Nav from './Nav';
const Ncard=(props1)=>{return(<>
            <div className="d-flex justify-content-center container mt-5">
    <div className="card p-3 bg-white" style={{width:"444px"}}>
        <div className="about-product text-center mt-2"><img src={props1.img} width="300"/>
            <div>
                <h4>{props1.tag}</h4>
                <h6 className="mt-0 text-black-50">{props1.name}</h6>
            </div>
        </div>
        
        <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>${props1.link}</span></div>
    </div>
</div>
</>);
};
const Cart =(props)=>{
  const [dd,ddf]=useState([]);

useEffect(
function re (){
	ddf(props.cd);
   ddf((old)=>{

    return props.fun;

  });

},[]);
console.log(dd);
return(<>
	<Nav/>
	{dd.map(function pro(val,index){
		console.log(val);
  return(<Ncard
key ={index}
 index={index}
  link={val.price}
  name={ val.category}
     tag={val.title}
 img={val.image}
/>);
})}

  </>); 
};
export default Cart;