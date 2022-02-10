const express = require('express');
const router = express.Router();

let projects = [
    {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
    },
    {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
    },
    {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
    }
]

// 
function fixArrayID(arr) {
    return arr.forEach((item, index) => item.id = index + 1)
    }

// create
router.post('/', (req, res) => {
    const {color, type, registration, capacity} = req.body;
    if (!color || !type || !registration || !capacity) {
        res.status(400).send({ msg: "missing"})
    }
    const project = {
        id: projects.length + 1,
        color,
        type,
        registration,
        capacity
    }
    projects.push(project)
    res.send(project)
})

// read
router.get('/', (req, res) => {
    res.send(projects)
})
router.get('/:id', (req, res) => {
    const project = projects.find(project => project.id == req.params.id)
    if (!project) res.status(404).send({ msg: "missing"})
    res.send(project)
})

// update
router.put('/:id', (req, res) => {
    const {color, type, registration, capacity} = req.body;
    const project = projects.find(project => project.id == req.params.id)
    if (!project) res.status(404).send({ msg: "missing"})
    if(color) project.color = color
    if(type) project.type = type
    if(registration) project.registration = registration
    if(capacity) project.capacity = capacity

    res.send(project)
})

// delete
router.delete('/:id', (req, res) =>{
    projects = projects.filter((project) => project.id !== req.params.id)
    fixArrayID
    res.send({msg: "it gone"})
})



module.exports = router;