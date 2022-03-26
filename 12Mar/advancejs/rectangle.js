var len = 10;
var width = 20;

function areaRectangle(len, width) {
    return (len * width);
}

function periRectangle(len, width){
    return (2(len+width));
}
//console.log(areaRectangle(len, width));



 

var rectangle = {
    len: 10,
    width: 20,
    areaRectangle: function(){
        return this.len * this.width;
    },

    periRectangle: function(){
        return (2(this.len+ this.width));
    }
}

console.log(rectangle.areaRectangle);
console.log(rectangle.periRectangle);

//factory function
function calulate(len, width){
    return {
        len: len,
        width: width,
        area : function(){
            return this.len * this.width;

        },
        peri: function(){
            return (2(this.len+ this.width));
        }

    };
}
var area1 = calulate(10, 20);
console.log("A = ",area1.area);
//console.log(calulate(10,20));
//console.log(calulate(30,20));


function Calulate(len, width){
    
        this.len = len,
        this.width = width,
        this.area = function(){
            return (this.len * this.width);

        },
        this.peri = function(){
            return (2*(this.len+ this.width));
        }

};

var a1 = new Calulate(30, 60);
console.log("Area = ",a1.area());
console.log("Perimeter = ",a1.peri());


//Using class
class Rectangle {
    constructor(len,width){
        this.len = len;
        this.width = width;
    }

    area(){
        console.log("Area using class = ",this.len*this.width);
    }
}

const r = new Rectangle(20, 40);
r.area();

class Square extends Rectangle{
    constructor(side){
        super(len);
        this.side = this.len;
    }

    squareArea = (side) => this.side*this.side;
}

const s = new Square(10);
s.squareArea();