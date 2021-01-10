const car = {
	wheels: 4,

	init () {
		console.log(`У меня есть ${this.wheels} колеса. Мой владелец ${this.owner}`)
	}
}

constcarWitchOwner = Object.create(car, {
	owner: {
		value: 'Дмитрий'
	}
})

constcarWitchOwner.init()
