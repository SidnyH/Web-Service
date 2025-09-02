const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// GET /api/usuarios - Obtener todos los usuarios
router.get('/', usuariosController.getAllUsuarios);

// GET /api/usuarios/:id - Obtener usuario por ID
router.get('/:id', usuariosController.getUsuarioById);

// POST /api/usuarios - Crear nuevo usuario
router.post('/', usuariosController.createUsuario);

// PUT /api/usuarios/:id - Actualizar usuario
router.put('/:id', usuariosController.updateUsuario);

// DELETE /api/usuarios/:id - Eliminar usuario
router.delete('/:id', usuariosController.deleteUsuario);

module.exports = router;