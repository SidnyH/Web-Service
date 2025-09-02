const Usuario = require('../models/usuario');

const usuariosController = {
  async getAllUsuarios(req, res) {
    try {
      const usuarios = await Usuario.getAll();
      res.json({
        success: true,
        data: usuarios,
        message: 'Usuarios obtenidos exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener usuarios',
        error: error.message
      });
    }
  },

  async getUsuarioById(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.getById(id);
      
      if (!usuario) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado'
        });
      }

      res.json({
        success: true,
        data: usuario,
        message: 'Usuario obtenido exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener usuario',
        error: error.message
      });
    }
  },

  async createUsuario(req, res) {
    try {
      const { nombre, correo, password } = req.body;
      
      if (!nombre || !correo || !password) {
        return res.status(400).json({
          success: false,
          message: 'Nombre, correo y password son requeridos'
        });
      }

      const usuario = await Usuario.create(nombre, correo, password);
      
      res.status(201).json({
        success: true,
        data: usuario,
        message: 'Usuario creado exitosamente'
      });
    } catch (error) {
      if (error.code === '23505') { // Violación de unique constraint
        res.status(400).json({
          success: false,
          message: 'El correo electrónico ya existe'
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Error al crear usuario',
          error: error.message
        });
      }
    }
  },

  async updateUsuario(req, res) {
    try {
      const { id } = req.params;
      const { nombre, correo, password } = req.body;

      const usuario = await Usuario.update(id, nombre, correo, password);
      
      if (!usuario) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado'
        });
      }

      res.json({
        success: true,
        data: usuario,
        message: 'Usuario actualizado exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar usuario',
        error: error.message
      });
    }
  },

  async deleteUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.delete(id);
      
      if (!usuario) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado'
        });
      }

      res.json({
        success: true,
        data: usuario,
        message: 'Usuario eliminado exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar usuario',
        error: error.message
      });
    }
  }
};

module.exports = usuariosController;