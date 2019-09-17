/**
 * Gaauss Summe
 */

function gSumme(n) {
    var mind = 0; // Zero first from my mind
    for (let i = 0; i <= n; i++) {
        mind = mind + i;
    }
    return mind;
}
//console.log(gSumme(5))
//console.log(0b01001010010101)//binary number
//console.log(0xFF)
function number(n, y) {
    return n + y

}
let x = number(number(50, -20), number(2, 5));
let z = 10 * number(5, 6)
console.log(x)
console.log(z)
number(2, 3) ///

5

/**
 * Void Function Noooooo Return
 */
function normal() {
    console.log("done")
    x = 0;
}
normal()
var c = normal()
console.log(c)
////////////////////
function factorial(n) {
    let myMind = 1;
    for (let i = n; i > 0; i--) {
        //myMind*= i;
        myMind = myMind * i
    }
    return myMind;
}
let f = factorial(4);
console.log(f);
//////////////////////////////
function avrage() {
    console.log(arguments)
    let myMind = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        myMind += arguments[i]
    }
    return myMind / arguments.length
}
let avr = avrage(5, 8, 10, 15, 20);
let avr2 = avrage(4, 8, 2, 6, 3, 11, 10, 9, 100)
console.log(avr)
console.log(avr2)
///////////////////////
let ar = [1, 5, 3, 6, 4, "str", true, false, {
        name: "Mostafa"
    },
    [5, 9, 6, 3, 0, 1], 6
];
console.log(ar)
let array = [5, 4, 8, 7, 5, 2, 3, [0, 3, 2, 1, 4, 5, 6]]

function calculate(someArray) {
    var myMind = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (typeof someArray[i] === "number") {
            myMind += someArray[i]
        }else if(typeof someArray[i] === "object"){
            let newArray= someArray[i]
                for(let j = 0; j<newArray.length;j++){
                    myMind+= newArray[j]
                }
        }
        //console.log(typeof someArray[i])
    }

    //return the sume of all the numbers inside this array
    return myMind
}
let sum = calculate(array)
console.log(sum) //=>55