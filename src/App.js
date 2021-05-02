import react,{useState,useEffect}from 'react';
import Nav from './Nav';
import Card from './copycard';
import Cro from './cara';
import Fot from './Footer';
 
const App =(props)=>{


const [cd1,fcd1]=useState([]);

useEffect(
  function cc(){
fcd1(props.cd);
});

return(<>
  <Nav carts={props.carts}/>
 <div >
 <Cro/>
 <hr className="line"/>
  <div className="row row-cols-1 row-cols-md-3 g-4">
  {cd1.map(function pro(val,index){
return(<Card 
      key ={index}
      index={index}
  link={val.price}
     name={ val.category}
     tag={val.title}
 des={val.description }
 img={val.image}
clif={props.clif}
      />);  
})}</div></div>
<Fot/></>
  );

};
export default App;

