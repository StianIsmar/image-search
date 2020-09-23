const generatorFunction = function*() {
	console.log("Doing api call")
	yield 'foo'
	yield 'foo'
	yield 'foo'
	yield 'foo'
	yield 'foo'
	yield 'foo'
	yield 'foo'
	yield 'foo'
	yield 'foo'
 
	
	}

const iterator = generatorFunction()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

