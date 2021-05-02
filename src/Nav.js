import react from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from 'react-router-dom';
const Nav =(props)=>{

return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
       
    <a className="navbar-brand" href="/">
      <img src="./amz.jpg" alt="amazon logo" width="120" height="30" className="d-inline-block align-text-top"/>
       </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><RoomOutlinedIcon/></a>

              </li>
         <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Deliver To India</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <button className="btn bg-white">All</button>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Women Faishon</a></li>
                  <li><a className="dropdown-item" href="#">Mens Fashion</a></li>
        
                  <li><a className="dropdown-item" href="#">Grocery</a></li>
                   <li><a className="dropdown-item" href="#">Toys</a></li>
                    <li><a className="dropdown-item" href="#">Mobiles</a></li>
                     <li><a className="dropdown-item" href="#">Amazon pay</a></li>
                </ul>
              </li>
               
            </ul>
              
              <input className="form-control me-0" type="search" placeholder="Search" aria-label="Search" />
            
              <Button className="bg-warning"><SearchOutlinedIcon/></Button>
             <Button className="bg-info" style={{overflow:"hidden",height:40,width:20,}}><GTranslateIcon/><small id="google_translate_element" style={{opacity:0.9}}></small></Button>             
             <NavLink  className="active-link" to="/Signin"> <Avatar  alt="Travis Howard" src="" /></NavLink>
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="#"><small>Returns & Oders</small></a>
              </li></ul>
                            
                <NavLink  className="active-link" to="/cart"> <a className="nav-link active " aria-current="page"><Button className="bg-white"><AddShoppingCartIcon/>{props.carts}</Button></a></NavLink>
              
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-secondary"><ul class="nav">
  <li classNmae="nav-item">
    <a className="nav-link active text-white" aria-current="page" href="#">Customer srevice</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Sell</a>
  </li>
  <li classNmae="nav-item">
    <a className="nav-link text-white" href="#">Gift cards</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Today's deal</a>
  </li>
</ul></div>
	</>
	);

};
export default Nav;