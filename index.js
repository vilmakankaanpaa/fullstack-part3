const express = require('express')
const app = express()
const morgan = require('morgan')
const uuid = require('node-uuid')

app.use(express.json())

morgan.token('person', function (req) {
  return req.person
})

let persons = [
	{ 
		id: 1,
		name: "Arto Hellas", 
		number: "040-123456"
	},
	{ 
		id: 2,
		name: "Ada Lovelace", 
		number: "39-44-5323523"
	},
	{ 
		id: 3,
		name: "Dan Abramov", 
		number: "12-43-234345"
	},
	{ 
		id: 4,
		name: "Mary Poppendieck", 
		number: "39-23-6423122"
	}
]

app.get('/info', (request, response) => {
	const info = 
	`Phonebook has info for ${persons.length} people. ` +
	`Current datetime is: ${new Date()}`
	response.json(info)
})

app.get('/api/persons', (request, response) => {
	console.log('getting all persons');
  response.json(persons)
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

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

	if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

	if (persons.find(person => person.name === body.name)) {
		return response.status(400).json({ 
      error: 'name must be unique' 
    })
	}

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random()*1000)
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
