class Light {
	constructor (light) {
		this.light = light
	}
}

class RedLigh extends Light {
	constructor () {
		super('red')
	}

	sign () {
		return 'СТОП'
	}
}

class YellowLigh extends Light {
	constructor () {
		super('yellow')
	}

	sign () {
		return 'ВНИМАНИЕ'
	}
}

class GreenLigh extends Light {
	constructor () {
		super('green')
	}

	sign () {
		return 'ЕЗЖАЙ'
	}
}

class TrafficLight {
	constructor () {
		this.states = [
			new RedLigh(),
			new YellowLigh(),
			new GreenLigh()
		]
		this.current = this.states[0]
	}

	change () {
		const total = this.states.length
		let index = this.states.findIndex(light => light === this.current)

		if (index + 1 < total) {
			this.current = this.states[index + 1]
		} else {
			this.current = this.states[0]
		}
	}

	sign () {
		return this.current.sign()
	}
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
