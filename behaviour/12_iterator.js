class MyIterator {
	constructor (data) {
		this.index = 0
		this.data = data
	}

	[Symbol.iterator] () {
		return {
			next: () => {
				if (this.index < this.data.length) {
					return {
						value: this.data[this.index++],
						done: false
					}
				} else {
					this.index = 0

					return {
						value: undefined,
						done: true
					}
				}
			}
		}
	}
}

function* generator (array) {
	let index = 0

	while (index < array.length) {
		yield array[index++]
	}
}

const iterator = new MyIterator(['This', 'is', 'iterator'])

for (const val of iterator) {
	console.log(val)
}

const gen = generator(['This', 'is', 'generator'])

// for (const val of gen) {
// 	console.log(val)
// }
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
