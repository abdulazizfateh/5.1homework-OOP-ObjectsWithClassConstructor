// TASK 1
// Motorcycle nomli class yarating. Unga model va year nomli xususiyatlar qo'shing.
{
    class Motorcycle {
        constructor(model, year) {
            this.model = model;
            this.year = year;
        }
    }
    const motorcyle1 = new Motorcycle("Sportbike", 2022);
    console.log(motorcyle1);
}




// TASK 2.1 - Using getter
// Rectangle classi yarating. U width va height qiymatlarini qabul qilsin. getArea() methodi yuzani qaytarsin.
{
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.width * this.height;
        }
    }
    const rectangeleA = new Rectangle(10, 12);
    console.log(rectangeleA.area);
}

// TASK 2.2 - Using a function as a method inside class/constuctor
{
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        getArea() {
            return this.width * this.height;
        }
    }
    const rectangeleA = new Rectangle(10, 12);
    console.log(rectangeleA.getArea());
}




// TASK 3
// Person classi yarating. isAdult() degan methodda age 18 dan katta yoki kichikligini tekshirib, true yoki false qaytaring
{
    class Person {
        constructor(age) {
            this.age = age;
        }
        isAdult() {
            return this.age >= 18;
        }
    }

    const user1 = new Person(19);
    console.log(user1.isAdult());
}




// TASK 4.1 - Using getter (It behaves as a simple "Object Property" but with some expression)
// Circle classi yarating. radius gabul qilsin. getCircumference() methodi aylananing uzunligini hisoblab bersin.
{
    class Cirlce {
        constructor(radius) {
            this.radius = radius;
        }
        get Circumference() {
            return this.radius * 2 * Math.PI;
        }
    }
    const circle1 = new Cirlce(5);
    console.log(circle1.Circumference);
}

// TASK 4.2 - Using getCircumference function (It behaves as a "Method" inside the object with doing some logic, and be called as a method)
// Circle classi yarating. radius gabul qilsin. getCircumference() methodi aylananing uzunligini hisoblab bersin.
{
    class Cirlce {
        constructor(radius) {
            this.radius = radius;
        }
        getCircumference() {
            return this.radius * 2 * Math.PI;
        }
    }
    const circle1 = new Cirlce(5);
    console.log(circle1.getCircumference());
}




// TASK 5
// Temperature classi yarating. celsius qiymati constructor orqali berilsin. fahrenheit getter orqali hisoblab qaytsin
{
    class Temperature {
        constructor(celsius) {
            this.celsius = celsius;
        }
        get farenheit() {
            return (this.celsius * 1.8) + 32;
        }
    }
    const temp1 = new Temperature(12);
    console.log(temp1.farenheit);
}




// TASK 6
// Employee classi Person classidan meros olsin. super() orqali ism va yoshni ota classga yuboring.
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Employee extends Person {
        constructor(name, age, salary) {
            super(name, age);
            this.salary = salary;
        }
    }

    const person1 = new Person("Abdulaziz", 19);
    const employee1 = new Employee("John", 22, 3300);

    console.log(person1);
    console.log(employee1);
}




// TASK 7.1 - Using method
// Movie classi yarating. title, year, rating mavjud. getInfo() methodi quyidagicha matn qaytarsin:
// "Interstellar (2014) - Rating: 8.6"
{
    class Movie {
        constructor(title, year, rating) {
            this.title = title;
            this.year = year;
            this.rating = rating;
        }
        getInfo() {
            return `${this.title} (${this.year}) - Rating: ${this.rating}`;
        }
    }
    const interstellar = new Movie("Interstellar", 2014, 8.6);
    console.log(interstellar.getInfo());
}

// TASK 7.2 - Using getter
{
    class Movie {
        constructor(title, year, rating) {
            this.title = title;
            this.year = year;
            this.rating = rating;
        }
        get info() {
            return `${this.title} (${this.year}) - Rating: ${this.rating}`;
        }
    }
    const interstellar = new Movie("Interstellar", 2014, 8.6);
    console.log(interstellar.info);
}