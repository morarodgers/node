let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people})
    console.log('It worked!')
}

const addPerson = (req, res) => {
    //console.log(req.body)
    const {name} = req.body
    if (name) {
        people.push({ id: people.length, neame: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    }
    res.status(400).json({success: false, message: 'Please provide a name'});
}

const updatePeople = (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({success: false, message: `No person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({success: false, message: `No person with id ${req.params.id}` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
}

module.exports = {getPeople, addPerson, updatePeople, deletePerson}