import AdjustIcon from '@mui/icons-material/Adjust';
import CategoryIcon from '@mui/icons-material/Category';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import RoofingIcon from '@mui/icons-material/Roofing';
import StoreIcon from '@mui/icons-material/Store';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavBar.css";




function MobileNavBar(): JSX.Element {

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="topnav">
            <a href="#home" className="active-nav">NavBar</a>
            <div id="myLinks" className={isOpen ? 'show' : ''}>
                <a onClick={closeMenu}>
                    <RoofingIcon /> <NavLink to="/home">Home</NavLink>
                </a>
                <a onClick={closeMenu}>
                    <AdjustIcon />  <NavLink to="/suppliers">Our Suppliers</NavLink>
                </a>
                <a onClick={closeMenu}>
                    <PeopleIcon /> <NavLink to="/employees">Our Employees</NavLink>
                </a>
                <a onClick={closeMenu}>
                    <StoreIcon /> <NavLink to="/products">Our Products</NavLink>
                </a>
                <a onClick={closeMenu}>
                    <CategoryIcon /> <NavLink to="/categories">Our Categories</NavLink>
                </a>
                <a onClick={closeMenu} >
                    <ContactPhoneIcon /> <NavLink to="/contact-us">Contact Us</NavLink>
                </a>
                <a onClick={closeMenu}>
                    <QuizIcon /> <NavLink to="/FAQ">FAQ</NavLink>
                </a>


            </div>
            <a className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars">Menu</i>
            </a>
        </div>
    );
}

export default MobileNavBar