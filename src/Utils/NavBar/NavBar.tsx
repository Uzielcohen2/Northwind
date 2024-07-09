import AdjustIcon from '@mui/icons-material/Adjust';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import RoofingIcon from '@mui/icons-material/Roofing';
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";




function NavBar(): JSX.Element {
    return (
        <div className="nav-bar">

             <RoofingIcon /> <NavLink to="/home">Home</NavLink>
            <AdjustIcon />  <NavLink to="/suppliers">Our Suppliers</NavLink>
            <PeopleIcon /> <NavLink to="/employees">Our Employees</NavLink>
            <StoreIcon /> <NavLink to="/products">Our Products</NavLink>
            <CategoryIcon /> <NavLink to="/categories">Our Categories</NavLink>


        </div>
    )

}
export default NavBar