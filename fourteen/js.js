// true && true => true
// true && false => false
// false && true => false
// false && false => false

// true || true => true
// true || flase => true
// false || true => true
// false || false => false

const position = 2
const positionOfCafe = 3
const isNear = positionOfCafe - position < 3
const myMoney = 500
const timeToSend = 30
const delivery = 50
const price = 450
const fullPrice = price + delivery
const canBuy = isNear && timeToSend < 40 && fullPrice <= myMoney

// if (3 - 2 < 3 && 30 < 40 && 501 <= 500) {
// if (canBuy) {
// 	console.log('заказываееем!')
// } else {
// 	console.log('голодаем')
// }

// const canBuyWithoutDelivery = fullPrice - delivery <= myMoney

// if (canBuy) {
// 	console.log('заказываееем! нам доставляют, мы мажоры')
// } else if (canBuyWithoutDelivery) {
// 	console.log('самовывоз! не голодаем')
// } else {
// 	console.log('голодаем')
// }


const sexOfBabyIsGirl = false
const weight = 5
// тернарный оператор
let nameOfChild = sexOfBabyIsGirl ? 'Бубусара Бейшеналиева' : 'Чингиз Айтматов'

// if (sexOfBabyIsGirl) {
// 	nameOfChild = 'Бубусара Бейшеналиева'
// } else {
// 	nameOfChild = 'Чингиз Айтматов'
// }

console.log(nameOfChild)