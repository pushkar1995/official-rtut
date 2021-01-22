//Procedural Programming Way
//Data and Funtion are decoupled

let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}


//Same in OOP Way

//Creating Employee Object 
let employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overTime * this.rate)
    }
}
employee.getWage();

//OOPs Pros:
//"The best functions are those with no parameters!" Uncle Bob - Robert C Martin