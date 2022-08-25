const { response, request } = require('express')


const getUsuarios  = (req = request,  res = response) => {
    const query = req.query

    res.json({
        msg:'get API - controlador',
        query
    });
}

const putUsuarios =  (req, res = response) => {
        res.json({
            msg:'put API - controlador'
        });
}

const postUsuarios = (req, res = response) => {
    const {name, age} = req.body

    res.status(201).json({
        msg:'post API - controlador',
        name,
        age,
    });
}

const deleteUsuarios = (req, res = response) => {
    res.json({
        msg:'delete API - controlador'
    });
}

const putIdUsuarios =  (req, res = response) => {
    const { id } = req.params
    res.json({
        msg:'put API - controlador',
        id,
    });
}






module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios,
    putIdUsuarios,
}