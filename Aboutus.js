const controller = require ('../Controller/Aboutus.js')
const express = require('express')

const route = express.Router()
route.get('/',controller.getAbouts);
route.get('/:id',controller.getAbout);
route.post('/',controller.AddAbout);
route.put('/:id',controller.updateAbout);
route.delete('/:id',controller.deleteAbout);

module.exports =route