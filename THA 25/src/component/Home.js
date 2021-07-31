
import Background from "../images/img1.jpg";
export default function Home(){
 

    return (
        <div  style={{backgroundImage:`url(${Background})`,height:"67vh"}} >
            <div className="content" style={{color:"white",position:"absolute",top: "40%",left:"30%",color:"white",fontWeight:"800"}}>
                <h1 style={{fontSize:"80px",fontFamily:"revert"}} >Innovation</h1>
                <p  style={{fontSize:"30px"}} >We create opportunities</p>
            </div>
        </div>
    )
}