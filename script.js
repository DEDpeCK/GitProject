// let numbers = [];
// for (let i = 0; i < 10; i++) {
//     numbers.push({i});
// }

// console.log(numbers);


// let numbers1 = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < 7; i++) {
//     numbers1.pop();
// }

// console.log(numbers1);


// let programmers = [
//     { name: 'Иван', experience: 4 },
//     { name: 'Дмитрий', experience: 2 },
//     { name: 'Екатерина', experience: 3 },
//     { name: 'Станислав', experience: 1 },
//     { name: 'Никита', experience: 5 },
//     { name: 'Артём', experience: 2 },
//     { name: 'Виктор', experience: 2 },
// ];
// let noldProgrammers = programmers.filter((el)=> {
//     return el.name[0], el.experience >= '3'
// })
// console.log(noldProgrammers);


let programmers = [
    {name: "Никита", money: 5300, position: "Главный разработчик" },
    {name: "Артём", money: 2100, position: "Старший разработчик" },
    {name: "Виктор", money: 3500, position: "Старший разработчик" },
    {name: "Екатерина", mney: 1300, position: "Младший разработчик" },
    {name: "Дмитрий", money: 700, position: "Стажёр" },
    {name: "Алексей", money: 2200, position: "Старший разработчик" },
    {name: "Игорь", money: 1100, position: "Младший разработчик" },
    {name: "Валерий", woney: 1400, position: "Младший разработчик" },
];
programmers.map((programmers) => {
    if (programmers.position === 'Главный разработчик') {
        return programmers.money *= 2
    } else if (programmers.position === 'Старший разработчик') {
        return programmers.money *= 1.7
    } else if (programmers.position === 'Младший разработчик') {
        return programmers.money *= 1.5
    } else return programmers.money *= 1.3
})
console.log(programmers);