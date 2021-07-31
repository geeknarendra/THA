import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './Style.css';

export default function Navbar() {
    const login = useSelector(state => state.userState.isloged)
    return (
        <div className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to={`${!login ? '/' : "/profile"}`}>Profile</NavLink>

        </div>
    );
}