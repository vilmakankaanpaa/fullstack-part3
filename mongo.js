const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
	`mongodb+srv://fullstack:${password}@testcluster.y7qrf.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const input_name = process.argv[3]
const input_number = process.argv[4]

if (process.argv.length > 3) {

	const person = new Person({
		name: input_name,
		number: input_number
	})

	console.log('new person:', person)
	
	person.save().then(result => {
		console.log(`Added ${input_name} with number ${input_number} to phonebook`)
		mongoose.connection.close()
	})
} else {
	console.log('Phonebook:')
	Person.find({}).then(result => {
		result.forEach(person => {
			console.log(person.name, person.number)
		})
		mongoose.connection.close()
	})

}