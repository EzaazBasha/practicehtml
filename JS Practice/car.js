const car = {
    brand : 'Tayota',
    model : 'Camry',
    year : 2018
};

console.log(car);

car.year = 2022;
delete car.model;
car.color = 'red';

console.log(car);