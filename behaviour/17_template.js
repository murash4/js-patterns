class Employee {
	constructor (name, salary) {
		this.name = name
		this.salary = salary
	}

	responsibilities () {}

	work () {
		return `${this.name} выполняет ${this.responsibilities()}`
	}

	getPaid () {
		return `${this.name} имеет ЗП ${this.salary}`
	}
}

class Developer extends Employee {
	constructor (name, salary) {
		super(name, salary)
	}

	responsibilities() {
		return `процесс создания программ`
	}
}

class Tester extends Employee {
	constructor (name, salary) {
		super(name, salary)
	}

	responsibilities() {
		return `процесс тестирования`
	}
}

const dev = new Developer('Vlad', 100000)
const tester = new Tester('Lena', 60000)

console.log(dev.getPaid())
console.log(dev.work())
console.log(tester.getPaid())
console.log(tester.work())
