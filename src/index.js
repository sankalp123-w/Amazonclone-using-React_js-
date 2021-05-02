import React,{useState,useEffect}from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Cart from './Cart'
import "./index.css";
import Sign from './Signin.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function Appsi() {
	var res;

const [cd,fcd]=useState([]);
useEffect(
	async function fet (){
    
 try{
   res= await fetch('https://fakestoreapi.com/products');
     var n = await res.json();
     fcd(n);
}catch(error){}
},[]);

 const[cart,cartf] = useState(0);
 const[items,itemsf] = useState([]);
function cli(index){
	 itemsf(cd);
    itemsf((old)=>{
      return old.filter((arryitm,ind)=>{

     return index===ind});});
    cartf(cart+1);
  
}
  console.log(items);
    return (
        <main>
            <Switch>
            <Route path="/" children={ <App clif={cli} cd={cd} carts={cart}/>} exact/>
                <Route path="/Signin" component={Sign} exact/>
                <Route path="/cart" children={<Cart fun={items} cd={cd}/>}/>
              
 
            </Switch>
        </main>
    );
}
ReactDOM.render(<>
	
    <BrowserRouter>
        <Appsi/>
    </BrowserRouter>
    </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
