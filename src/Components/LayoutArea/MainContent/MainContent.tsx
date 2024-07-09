import AdjustIcon from '@mui/icons-material/Adjust';
import CategoryIcon from '@mui/icons-material/Category';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PeopleIcon from '@mui/icons-material/People';
import RoofingIcon from '@mui/icons-material/Roofing';
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import FaceQR from "../../../assets/images/FaceQr.png";
import logo from "../../../assets/images/LOGO-removebg-preview.png";
import MyPic from "../../../assets/images/Uziel AVATAR.jpg";
import InstaQR from "../../../assets/images/instaQR.png";
import Signature from "../../../assets/images/signature.png";
import "./MainContent.css";


function MainContent(): JSX.Element {
    return (
        <div className="main-content">

            <div className="wrapper">
                {/* My Card */}

                <div className="my-avatar">
                    {/* My picture */}
                 
                        <img src={MyPic} alt="Avatar" className='flip-box-inner' />
                 
                    <div className="flip-box-back">
                    <br />
                        <p>Thanks for visiting</p>
                    </div>
                    <br />
                    {/* Signature */}
                    <img src={Signature} alt="Avatar" />

                </div>




                <div className="my-card">

                    <div className="container">
                        {/* Name && Data */}
                        <h2><b>Uziel Cohen</b></h2>
                        <p>Full - Stack Developer</p>
                        <br />
                        {/* Social Icons */}
                        <div className="social-icons">
                            {/* Facebook */}
                            <p>
                                <SocialIcon url="https://www.facebook.com/ywsp.hyym/" /> </p> <p><img src={FaceQR} className='social-qr' /></p>
                            <br />

                            {/* Instagram */}
                            <p><SocialIcon url="https://www.instagram.com/uziel.co/" /></p> <p><img src={InstaQR} className='social-qr' /></p>
                            <br />

                            {/* Linkedin */}
                            <p><SocialIcon url="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F" /></p>
                            <br />

                            {/* WhatsApp */}
                            <p><SocialIcon url="https://www.whatsapp.com/" /></p>
                        </div>
                    </div>

                </div>



                {/* Northwind Card */}
                <div className="northwindCard">
                    <div className="container">
                        {/* Title + description */}
                        <h1><b> Navbar <MyLocationIcon /> </b></h1>
                        <h3>Here you can find our Employees,Suppliers,Our special products and etc...</h3>
                        <br />

                        {/* NavBar */}
                        <div className="nav-icons">
                            {/* Home */}
                            <RoofingIcon /> <NavLink to="/home">Home</NavLink>
                            {/* Suppliers */}
                            <AdjustIcon />  <NavLink to="/suppliers">Our Suppliers</NavLink>
                            {/* Employees */}
                            <PeopleIcon /> <NavLink to="/employees">Our Employees</NavLink>
                            <br /><br />
                            {/* Products */}
                            <StoreIcon /> <NavLink to="/products">Our Products</NavLink>
                            {/* Categories */}
                            <CategoryIcon /> <NavLink to="/categories">Our Categories</NavLink>


                        </div>
                        {/* Mini logo  */}
                        <img src={logo} alt="northwind" />
                    </div>
                </div>




                {/* End of wrapper div */}
            </div>



            {/* End of main div */}
        </div>
    );
}

export default MainContent;
