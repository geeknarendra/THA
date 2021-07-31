import { useSelector } from "react-redux";
import './Style.css';

export default function Profile() {
    const userName = useSelector((state) => state.userState.username);
    const userEmail = useSelector((state) => state.userState.email);
    return (
        <div className="profile">
            <h1>Profile:Private Route</h1>

            <ul > Your Login Info:
                <li>UserName: {userName}</li>
                <li>Email: {userEmail}</li>
            </ul>

        </div>
    );
}