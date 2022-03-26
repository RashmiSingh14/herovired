var basicSalary = 30000;
var overTime = 10;
var rate = 1500;
function salaryCalculator(basicSalary, overTime, rate){
    return basicSalary + (overTime * rate);
}

console.log(salaryCalculator(basicSalary,overTime,rate))

var employee = {
    basicSalary: 30000,
    overTime: 10,
    rate: 1500,
    salaryCalculator: function(){
        return this.basicSalary + (this.overTime * this.rate);
    }

};

console.log(employee.salaryCalculator());

function createEmployee(basicSalary, overTime, rate){
    return {
        basicSalary: basicSalary,
        overTime: overTime,
        rate: rate,
        salary : function(){
            return this.basicSalary + (this.overTime * this.rate);

        }

    };
}

var employee3 = createEmployee(100000, 3 , 500);


const person2 = {
    firstName: "abc",
    lastName: "def",
    get fullName(){
        console.log(this.firstName+ " " + this.lastName)
    },
    set fullName(val){
        const parts = val.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person2.fullName;
person2.fullName("hey hi");
person2.lastName();

function sum(a,b){
    return a+b;
}

let sum1 = (a,b) => {
    return a+b;
}
//arrow function
let sum2 = (a,b) => a+b;

let randomNumber = () => Math.random;



