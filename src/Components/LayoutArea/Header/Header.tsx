import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import QuizIcon from '@mui/icons-material/Quiz';
import { NavLink } from 'react-router-dom';
import appConfig from '../../../Utils/AppConfig';
import Clock from "../../../Utils/Clock/Clock";
import MobileNavBar from '../../../Utils/MobileNavBar/MobileNavBar';
import logo from "../../../assets/images/LOGO-removebg-preview.png";
import AuthMenu from '../../AuthArea/AuthMenu/AuthMenu';
import "./Header.css";


//navigator
function Header(): JSX.Element {



    return (

        <div className="Header">
            {/* Title Image */}
            <NavLink to={appConfig.HomeRoute} className="title-img">
                <img src={logo} alt="titleImage" className='northwind-img' />
            </NavLink>
            <div className="mobile-nav">
                <MobileNavBar />
            </div>
            {/* Contact - FAQ + Clock*/}
            <AuthMenu />
            <div className="contact-FQA">
                {/* Clock */}
                <Clock />

                <br />
                {/* Contact us */}
                <ContactPhoneIcon />
                <NavLink to={appConfig.contactRoute}>
                    <a >Contact us</a>
                </NavLink>
                {/* FQA */}
                <QuizIcon />
                <NavLink to={appConfig.FAQ}>
                    <a>FAQ</a>
                </NavLink>

            </div>




            {/* Closing tag Div */}
        </div>


    );
}

export default Header;
