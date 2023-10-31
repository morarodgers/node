let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people})
    console.log('It worked!')
}

const getPersonById = (req, res) => {
  const id = parseInt(req.params.id);

  const person = people.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

const addPerson = (req, res) => {
//  const nextId = people.length > 0 ? people[people.length - 1].id + 1 : 1;
//  people.push({ id: nextId, name: req.body.name });
const {name} = req.body
if (name) {
  const newName = req.body.name;
  const newPerson = { id: nextId, name: newName };
  people.push(newPerson);

  res.status(201).json(newPerson);
} else {
  res.status(400).json({success: false, message: 'Please provide a name'});
}
};

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
    //const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    const index = people.findIndex(person => person.id === Number(req.params.id));
    people.splice(index, 1);
    return res.status(200).json({success: true, data: index})
}

module.exports = {getPeople, getPersonById, addPerson, updatePeople, deletePerson}