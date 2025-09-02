const pool = require('../config/database');

class Usuario {
  static async getAll() {
    const result = await pool.query('SELECT * FROM usuarios ORDER BY id_usuario');
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id]);
    return result.rows[0];
  }

  static async create(nombre, correo, password) {
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, correo, password) VALUES ($1, $2, $3) RETURNING *',
      [nombre, correo, password]
    );
    return result.rows[0];
  }

  static async update(id, nombre, correo, password) {
    const result = await pool.query(
      'UPDATE usuarios SET nombre = $1, correo = $2, password = $3 WHERE id_usuario = $4 RETURNING *',
      [nombre, correo, password, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query(
      'DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}

module.exports = Usuario;