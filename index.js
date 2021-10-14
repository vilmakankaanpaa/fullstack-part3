require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('person', function (req) {
  return req.person
})

app.get('/info', (request, response) => {
	const info = 
	`Phonebook has info for ${persons.length} people. ` +
	`Current datetime is: ${new Date()}`
	response.json(info)
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(person => {
    response.json(person)
	})
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.use(assignPerson)
app.use(morgan(':method :url :response-time :person'))

function assignPerson (req, res, next) {
  req.person = JSON.stringify(req.body)
  next()
}

app.post('/api/persons', (request, response) => {
  const body = request.body

	if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }

  if (body.number === undefined) {
    return response.status(400).json({ error: 'number missing' })
  }

	// if (persons.find(person => person.name === body.name)) {
	// 	return response.status(400).json({ 
  //     error: 'name must be unique' 
  //   })
	// }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
