
//console.log(array[6][0])
function calculate(someArray) {
    var myMind = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (typeof someArray[i] === "number") {
            myMind += someArray[i]
        }else if(typeof someArray[i] === "object"){
            let newArray= someArray[i]
                for(let j = 0; j<newArray.length;j++){
                   // myMind+= newArray[j]
                   if(typeof newArray[j]==="number"){
                    myMind +=newArray[j]
                   }else if(typeof newArray[j]==="object"){
                    let newArray2 = newArray[j]
                       for(let k=0; k<newArray2.length; k++){
                           myMind+= newArray2[k]
                       }
                   }
                }
        }
    }
    //return the sume of all the numbers inside this array
    return myMind
}

let array = [5, 4, 8, [7], [5], 2, 3, [0, 3, [2], 1, 4, 5, 6]];
let x= calculate(array)
console.log(x)
console.log(typeof x+" thats X")
console.log(array[7][2][0]+"=>>>>>>>>>>>>")
let z = 10
let t = "5"
let f = z+t;
console.log( f)//=>105
console.log(typeof f) 
let zx=10
let ar=[2]
let res= zx+ar
console.log(res)
console.log(typeof res)
console.log("=======================================================")
/////////// Recursion :)
function reCalculate(someArray) {
    var myMind = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (typeof someArray[i] === "number") {
            myMind += someArray[i]
        }else if(typeof someArray[i] === "object"){//we are in array
                myMind+= reCalculate(someArray[i])
        }
    }
    //return the sume of all the numbers inside this array
    return myMind
}
let array1 = [5, 4, 8, [7], [5], 2, 3, [0, 3, [2,[2,5,6]], 1, 4, 5, 6]];
let n = reCalculate(array1);
console.log(n)

/////////////Factorial number Recursion
function factorial(n){
    if(n<=1){
        return 1
    }else{
        return n*factorial(n-1); 
    }
}
let number = factorial(4)
console.log(number)

///////////////Gauss Summe Recursion
function gaussSumme(n){
if(n<=0){
    return 0
}else{
    return n+gaussSumme(n-1);
}
}
let someNumber = gaussSumme(10);
console.log(someNumber)