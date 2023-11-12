const express = require('express')
const router = express.Router()
const {
    getAllTasks, 
    createTask,
    getTask,
    updateTask,
    deleteTask,
    //editTask
} = require('../controllers/tasks')


router.route('/').get(getAllTasks)

router.route('/').post(createTask)

router.route('/:id').get(getTask)

router.route('/:id').patch(updateTask)

router.route('/:id').delete(deleteTask)
//router.route('/:id').put(editTask)


module.exports = router