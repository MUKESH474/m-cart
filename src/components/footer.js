import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="footer">
            <h4 className="footertitle" > Follow us on</h4>
            <ul className="footerli">
            <li className="linkedin"> <Link to={'https://www.linkedin.com/in/mukesh-kumar-m74/'} className="linkedin" target="blank"><FaLinkedin/></Link> </li>
            <li className="github"> <Link to={'https://github.com/MUKESH474'} className="github" target="blank"><FaGithub/></Link></li>
            <li className="insta"><Link to={'https://www.instagram.com/mukesh_muge/'} className="insta" target="blank"> <FaInstagram/></Link></li>
            
            </ul>
            <div>
                <h6  className="footerbar"> <FaRegCopyright /> Mukesh kumar</h6>
            </div>
        </div>
    )
}
export default Footer;