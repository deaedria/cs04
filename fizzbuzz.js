const fizzBuzz = function(data) {
    for(let i=0; i<data.length; i++){
        if(data[i] % 3 === 0 && data[i] % 5 === 0){
            console.log(data[i] + " FizzBuzz")
        }
        else if(data[i] % 5 === 0){
            console.log(data[i] + " Buzz")
        }
        else if(data[i] % 3 === 0){
            console.log(data[i] + " Fizz")
        }
        else{
            console.log(data[i].toString())
        }
    }
}

module.exports = fizzBuzz;