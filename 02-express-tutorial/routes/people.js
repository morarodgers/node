const express = require("express");
const router = express.Router();

//let {people} = require('../data')

const { getPeople, addPerson, updatePeople, deletePerson } = require("../controllers/people");


router.get('/', getPeople)

router.post('/', addPerson)

router.put('/:id', updatePeople)

router.delete('/:id', deletePerson)

module.exports = router