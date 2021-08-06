

function Chess(){

    var block=[];
    for(let i=0;i<8;i++){
        let bgColor= i%2===0 ? "black":"white"
        for(let j=0;j<8;j++){   
        block.push(
            (
                <div style={{backgroundColor:bgColor,height:"20px",width:"20px"}}>
            
                </div>
            )
        )
        bgColor= bgColor==="white"? "black":"white"
            }
    }
    return(
        <div className="chessBoard">
            {block}
        </div>
    )

}
export default Chess