import react from "react";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SecurityIcon from '@material-ui/icons/Security';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
 const Fot = ()=>{
return(<>  <footer><div className="container-fluid">
        <div className="card">
          <div className="heading text-center">
            <div className="head1">Just Scratching the Surface</div>
            <p className="bdr" />
          </div>
          <div className="card-body">
            <div className="row m-0 pt-5">
              <div className="card col-12 col-md-3">
                <div className="card-content"><LocalAtmIcon/>
                  <div className="card-title"> RECHARGE REPEAT CUSTOMER </div>
                  <p><small>Save customers' cards for future phone orders</small></p>
                  <div className="learn-more">
                    <p> <small> LEARN MORE <label><i className="fas fa-angle-right" /></label> </small> </p>
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-3">
                <div className="card-content"> <ThumbsUpDownIcon  />
                  <div className="card-title"> ACCEPT ELECTRONIC CHECK </div>
                  <p><small>Save customers' cards for future phone orders</small></p>
                  <div className="learn-more">
                    <p> <small> LEARN MORE <label><i className="fas fa-angle-right" /></label> </small> </p>
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-3">
                <div className="card-content"> <PhoneAndroidIcon />
                  <div className="card-title"> STREAMLINE PHONE PAYMENTS </div>
                  <p><small>Save customers' cards for future phone orders</small></p>
                  <div className="learn-more">
                    <p> <small> LEARN MORE <label><i className="fas fa-angle-right" /></label> </small> </p>
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-3">
                <div className="card-content"> <SecurityIcon />
                  <div className="card-title"> STAY<br /> SECURE </div>
                  <p><small>Save customers' cards for future phone orders</small></p>
                  <div className="learn-more">
                    <p> <small> LEARN MORE <label><i className="fas fa-angle-right" /></label> </small> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer row m-0">
            <p> <label> <PhoneEnabledIcon/> </label> 800-601-0230</p>
            <div>
              <p> <small className="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label className="footer-right"> <FacebookIcon /> <InstagramIcon/> <TwitterIcon/> <LinkedInIcon /> </label> </p>
            </div>
          </div>
        </div>
      </div></footer></>)
 };
 export default Fot;