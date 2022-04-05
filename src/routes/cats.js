const express = require('express')
const cats = express.Router()

const data = [
    {
        id: 1,
        name: 'My Melody'
    },
    {
        id: 2,
        name: 'Hello Kitty'
    },
    {
        id: 3,
        name: 'Chococat'
    }
]

cats.get('/', (req, res) => {
    res.status(200).json({data})
})

cats.get('/:id', (req, res) => {
    res.status(200).json(data[0])
})

cats.post('/', (req, res) => {
    res.send('Received a POST cats request')
})

cats.put('/:id', (req, res) => {
    res.send('Received a PUT cats request')
})

cats.delete('/:id', (req, res) => {
    res.send('Received a DELETE cats request')
})

module.exports = cats