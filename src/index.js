"use strict";

const express = require('express')

const cats = require('./routes/cats')

const app = express()
const baseUrl = '/api/v1'

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.all('*', (req, res, next) => {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    })
    next()
})

app.use(`${baseUrl}/cats`, cats)

module.exports = app