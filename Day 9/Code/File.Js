// Create 2 object and try to use call, apply and bind on them
// Try to use different events on objects, you can refer to this link

const obj1={
    Name:"First",
    Info:"This is MY 1st object"
}
const obj2={
    Name:"Second",
    Info:"This is MY 2nd object "
}
const obj3={
    Name:"Third",
    Info:"This is MY 3rd object "
}

function dev(){
    console.log(this);
    console.log(this.Info)
}

function sum(a,b){
    console.log(this);
    console.log("Sum of given number is",a+b)
}


// Using Call Funtion
dev.call(obj1)
sum.call(obj2,2,3)

// Using apply

sum.apply(obj3,[4,6] )

// Using bind 
var valSum=sum.bind(obj1,2,4)
valSum()


//Spread Operator
function sum(...arr){
    console.log(this);
    console.log(arr);   //Print argument
    var total=0
    for(i of arr){
        total+=i
    }
    console.log(total)    
}

sum.call(obj1,3,4,5)
sum.call(obj3,2,3,34,54,2)