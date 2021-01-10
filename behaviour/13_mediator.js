class User {
	constructor (name) {
		this.name = name
		this.room = null
	}

	send (message, to) {
		this.room.send(message, this, to)
	}

	receive (message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`)
	}
}

class ChatRoom {
	constructor() {
		this.users = {}
	}

	register (user) {
		this.users[user.name] = user
		user.room = this
	}

	send (message, from, to) {
		if (to) {
			to !== from ? to.receive(message, from) : null
		} else {
			Object.keys(this.users).forEach(key => {
				if (this.users[key] !== from) {
					this.users[key].receive(message, from)
				}
			})
		}
	}
}

const vlad = new User('vlad')
const lena = new User('lena')
const igor = new User('igor')

const room = new ChatRoom()

room.register(vlad)
room.register(lena)
room.register(igor)

vlad.send('hello', lena)
lena.send('hi', vlad)
igor.send('ho ho ho')
