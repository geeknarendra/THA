import './Style.css'

export default function About(){
    return (
        <div className="about">
            <h2>This Public Route</h2>
            <p>Private Route will be only access after Login</p>
            <ul >Concepts used in this build:
                <li>Router</li>
                <li>Redux </li>
            </ul>
        </div>
    );
}