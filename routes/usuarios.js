
const { Router } = require('express');
const { getUsuarios, 
        putUsuarios, 
        postUsuarios, 
        deleteUsuarios,
        putIdUsuarios } = require('../controllers/usuarios');
 
const router = Router();

router.get('/', getUsuarios)

router.put('/', putUsuarios )

router.post('/', postUsuarios)

router.delete('/', deleteUsuarios)   

router.put('/:id', putIdUsuarios);

module.exports = router;
