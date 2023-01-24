let punch = function () {
	const sum = a + b
	return sum
}

function sumOfTwoDigits (a, b) {
	const sum = a + b
	return sum
}



const a = sumOfTwoDigits(1, 10)

console.log(a)




const array = [1, 2, 3, 5, 1, 13]
const array2 = [1, 20, 123, 5, 1588, 13]

function sumOfArrayNumbers (numbers) {
	let sum = 0
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i]
	}
	console.log(sum)
}

sumOfArrayNumbers(array2)

const sumTwoNumbers = (a, b) => a + b

console.log(sumTwoNumbers(2, 3), 'here is new arrow function')


const list = [1, 2, 4, -1]
const isPositive = (a) => a > 0

let newList = []
for (let i = 0; i < list.lenght; i++) {
	let a = isPositive(list[i])
	if (a) {
		newList.push(list[i])
	}
}












