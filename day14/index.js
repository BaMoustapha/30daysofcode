const pi = 3.14
try {
     pi = 5.1
} catch (error){
    console.log(error)
} finally {
    console.log(`Pi value is ${pi}`)
}


let a = Number(prompt("enter a"))
let b = Number(prompt("enter b"))

let Divide = (a, b) => {
    try {
        if(b === 0) throw 'b doit etre different de 0';
        return a/b;
    }
    catch (error) {
        console.log(error);
    }
 }
 let result = Divide(a/b);