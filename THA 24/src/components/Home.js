import './Style.css'

export default function Home({login,setLogin}){
    return (
        <div className="home">
            <div className="header">
                <h1>Home</h1>
                <p>If not logged in you cant access, Profile & Dashboard </p>
                {login?
                <button onClick={()=>setLogin(false)} >Logout</button>
                :<button onClick={()=>setLogin(true)} >Login</button>
                }
                
            </div>
        </div>
    );
}