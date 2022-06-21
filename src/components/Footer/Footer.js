import React,{useEffect} from 'react'
import{Link} from "react-router-dom"
import { connect } from "react-redux";
import { changeCurrentPage } from "../../redux/actions/currentPageActions";

function Footer({
    currentPage,
    changeCurrentPage
}) {
  return (
    <div className='footer'>
        <div>
            <div>
                <img className='mainLogoDarkFooter' src='image/mainLogoDark.png' alt='mainLogo'></img>
                <p>88/89 Peter Odili Road, Port Harcourt, Rivers State.</p>
            </div>
            <div>
                <div>
                    <Link to="/" onClick={()=>changeCurrentPage("home")}>Home</Link>
                    <Link to='services'  onClick={()=>changeCurrentPage("services")}>Services</Link>
                </div>
                <div>
                    <Link to="/about" onClick={()=>changeCurrentPage("about")}>About</Link>
                    <Link to='/contactus'  onClick={()=>changeCurrentPage("contactus")}>Contact Us</Link>
                </div>
                <div>
                    <Link to="/pricing" onClick={()=>changeCurrentPage("pricing")}>Pricing</Link>
                    <Link to='/webniar'  onClick={()=>changeCurrentPage("webniar")}>Webniar</Link>
                </div>
            </div>
            <div>
                <p>Connect With Us</p>
                <div className='socialMediaArea'>
                    <a href='https://twitter.com/miraccumbur' target="_blank"><img src='icon/twitter.png' alt="twitter"></img></a>
                    <a href='https://www.instagram.com/miraccumbur/' target="_blank"><img src='icon/instagram.png' alt="instagram"></img></a>
                    <a href='https://www.facebook.com/' target="_blank"><img src='icon/facebook.png' alt="facebook"></img></a>
                    <a href='https://www.linkedin.com/in/miraccumbur/' target="_blank"><img src='icon/linkedin.png' alt="linkedin"></img></a>
                </div>
            </div>

        </div>
        <p>© Jo-Jean Imoh-Ita. All right reserved. Designed by AMANi Art --- createdbymircos</p>
    </div>
  )
}

function mapStateToProps(state) {
    return {
      currentPage: state.currentPageReducer,
    };
  }
  
  const mapDispatchToProps = {
    changeCurrentPage,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer);
  