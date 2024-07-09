import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import QuizIcon from '@mui/icons-material/Quiz';
import { NavLink } from 'react-router-dom';
import appConfig from '../../../Utils/AppConfig';
import Clock from "../../../Utils/Clock/Clock";
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
            {/* Contact - FQA + Clock*/}
            <AuthMenu />
            <div className="contact-FQA">
                {/* Clock */}
                <Clock />

                <br />
                {/* Contact us */}
                <ContactPhoneIcon /> <a href="">Contact us</a>
                {/* FQA */}
                <QuizIcon /> <a href="">FQA</a>
            </div>




            {/* Closing tag Div */}
        </div>


    );
}

export default Header;
