const Task = require('../models/Task')
const getAllTasks = (req, res) => {
    res.send('All items')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    //res.send('Create task')
    res.status(201).json({task})
}

const getTask = (req, res) => {
    //res.send('Get single task')
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('Update task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}