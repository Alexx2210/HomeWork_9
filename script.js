class Person {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    };
    
    move() {
        console.log(`Такой-то ${this.fullname} говорит`);
    };

    talk() {
        console.log(`Такой-то ${this.fullname} говорит`);
    }


};

//Передали параметры в данный объект
const ObjectOne = new Person ('Evgeniy', 22);
console.log(ObjectOne);
console.log(ObjectOne.move());

//В данный объект параметры не передали
const ObjectTwo = new Person (

);
console.log(ObjectTwo);

class Student {
    constructor(firstName, lastName, group, averageMark, isScience) {
        this.fistName = firstName;
        this.lastName = lastName;
        this.group = group; 
        this.averageMark = averageMark;
        this.isScience = isScience;
    };

    getScholarship() {
        if (this.averageMark === 5) {
            let sum = '100$';
            return `Scolarship is: ${sum}`;
        }
        else {
            let sum = '80$';
            return `Scolarship is: ${sum}`;
        };
    };
};

class Aspirant extends Student{
    getScholarship() {
        if (this.averageMark === 5) {
            let sum = '200$';
            return `Scolarship is: ${sum}`;
        }
        else {
            let sum = '180$';
            return `Scolarship is: ${sum}`;
        };
    };   
};


const studentOne = new Student('Alexander', 'Oreshkin', 'M22-507', 5, false);

const studentTwo = new Aspirant('Evgeniy', 'Evgen', 'A22-507', 4, true);

let peoples = [studentOne, studentTwo];

peoples.forEach(element => {
    console.log(element);
    console.log(element.getScholarship());
});