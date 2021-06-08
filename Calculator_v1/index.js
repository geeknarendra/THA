function sumValues(){
    var num1,num2,res;
    num1=Number(document.getElementById("num1").value);
    num2=Number(document.getElementById("num2").value);
    res=num1+num2;
    document.getElementById("result").value=res;
}
function minValue(){
    var num1,num2,res;
    num1=Number(document.getElementById("num1").value);
    num2=Number(document.getElementById("num2").value);
    res=num1-num2;
    document.getElementById("result").value=res;
}
function multiplyValue(){
    var num1,num2,res;
    num1=Number(document.getElementById("num1").value);
    num2=Number(document.getElementById("num2").value);
    res=num1*num2;
    document.getElementById("result").value=res;
}
function divideVal(){
    var num1,num2,res;
    num1=Number(document.getElementById("num1").value);
    num2=Number(document.getElementById("num2").value);
    res=num1/num2;
    document.getElementById("result").value=res;
}

function clearVal(){
    console.log('Hello');
    document.getElementById("values").reset(); 
 
}

