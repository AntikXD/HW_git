const name =prompt('Привіт, вкажи імʼя')
alert('Привіт, ' +  name)

const birthyear =prompt(name + ', вкажи свій рік народження?')
const year = 2023
const yourage = year - birthyear
alert(name + ', тобі ' + yourage)

const SquareSideLenth =prompt("Я зможу виміряти периметр будь якого квадрату))) Не віриш? Впиши довжину будь якої його сторони:-)")
const SquarePerimetr = SquareSideLenth * 4
alert('Периметр буде ' + SquarePerimetr)

const CircleRadius =prompt('Погнали далі, давай вирахую площу кола. Вкажи його радіус')
const Pi = 3.14
const CircleArea = Pi * Math.pow(CircleRadius, 2)
alert('якщо буде не ' + CircleArea + ' то я йду працювати на завод')

const distance =prompt('Я крутіший за google maps, не віриш? Вкажи відстань яку плануєш проїхати?')
const timeHours =prompt('Такс, за скільки годин хочеш туди добратися?')
const speed = distance / timeHours
alert('Маєш газувати мінімум ' + speed + ' км/год якщо плануєш вкластися в час. Обережно, дороги так собі(')

const dollarCourse = 37.9
const euroCourse = 41
const DollarToEuro = dollarCourse / euroCourse

const dollars =prompt('Йоу, поміняти долари в євро не хочеш? Вкажи скільки доларів плануєш поміняти:')
const exchangeResult = DollarToEuro * dollars
alert('Вийде ' + Math.trunc(exchangeResult) + ' євро')