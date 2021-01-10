function networkFetch (url) {
	return `${url} - Ответ сервера`
}

const cache = new Set()
const proxiedFerch = new Proxy(networkFetch, {
	apply(target, thisArgs, args) {
		const url = args[0]
		if (cache.has(url)) {
			return `${url} - Ответ из кэша`
		} else {
			cache.add(url)
			return Reflect.apply(target, thisArgs, args)
		}
	}
})

console.log(proxiedFerch(('angular.io')))
console.log(proxiedFerch(('react.io')))
console.log(proxiedFerch(('angular.io')))
