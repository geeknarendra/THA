function number(num){
    var result=document.getElementById("input")
    result.value+=num;
    console.log(num)
}

function result(){
    var result=document.getElementById("input")
    result.value=eval(result.value)
}
function clearVal(){
    document.getElementById("input").value="";

}

function deleteChar(){
    var number=document.getElementById("input");
    let result=number.value;
    result=result.slice(0,-1)
    number.value=result;
}