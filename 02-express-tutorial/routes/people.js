const express = require("express");
const router = express.Router();

//let {people} = require('../data')

const { getPeople, getPersonById, addPerson, updatePeople, deletePerson } = require("../controllers/people");

router.get('/', getPeople)

router.get('/:id', getPersonById)

router.post('/', addPerson)

router.put('/:id', updatePeople)

router.delete('/:id', deletePerson)

module.exports = router