const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// GET /api/usuarios - Obtener todos los usuarios
router.get('/', usuarioController.getAllUsuarios);

// GET /api/usuarios/:id - Obtener usuario por ID
router.get('/:id', usuarioController.getUsuarioById);

// POST /api/usuarios - Crear nuevo usuario
router.post('/', usuarioController.createUsuario);

// PUT /api/usuarios/:id - Actualizar usuario
router.put('/:id', usuarioController.updateUsuario);

// DELETE /api/usuarios/:id - Eliminar usuario
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;