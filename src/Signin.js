import react from 'react';
import Nav from './Nav';
import './sign.css';



const Sign= ()=>{
return(<>
	<Nav/>
	<div className="d-flex justify-content-center container">
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form action="http://localhost/php/portfolio-responsive-complete-master/port.php" method="POST" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input" name="name"/>
                        <input  type="mail" placeholder="Email" className="contact__input" name="mail"/>
                        <textarea cols="0" rows="10" className="contact__input" name="det" placeholder="Discription"></textarea>
                        <input  type="submit" value="submit" className="contact__button button" name="submit"/>
                    </form>
                    </div>
                    </section>
                    </div>

	</>);



};
export default Sign;