let a = 0.1;
let b = 0.2;
console.log(a+b);

let aa = "1";
let bb = 2;
console.log(Number(aa)+bb);

let sizeGB =prompt("Серія серіалу важлть 820 мб, введи на ск GB в тебе флешка, а я порахую скільки серій ти можеш скачати");
const sizeMb = sizeGB * 1024;
const fileSize = 820;
alert ('Ого, твоя флешка може вмістити ' + ((sizeMb / fileSize).toFixed(0)) + ' серій')

let money =prompt('Давай порахуємо скільки шоколадок ти зможеш купити прямо зараз)) Скільки маєш грошей в гаманці?')
let chocolatePrice =prompt('Окей, скільки вартує шоколадка?')
const chokolateCanBuy = Math.floor(money / chocolatePrice)
const changeMoney = money - chokolateCanBuy * chocolatePrice
alert ('Ти зможеш купити '+ chokolateCanBuy + ' шоколадок, а в гаманці лишиться ' + changeMoney + ' гривнів здачі')

let number1 =prompt('Давай фокус, введи тризначне число')
let lastDigit = number1 % 10
alert("не зрозумів як зробити це завдання")
// не зрозумів як зробити це завдання

let Deposit = prompt("Ввведи суму, яку хочеш внести на депозит");
const percentRate = 0.05;
const monthRate = percentRate / 12;
let profitDeposit = Deposit * monthRate * 2;
let balanceDeposit = Number(Deposit) + profitDeposit
alert("При ставці 5% річних за 2 місяці в тебе вийде сума: " + balanceDeposit ) 

console.log(2 && 0 && 3)
console.log( 2 || 0 || 3)
console.log(2 && 0 || 3)