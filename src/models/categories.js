const pool = require('../database/db'); // Ajusta la ruta de tu conexión si es diferente

async function getCategories() {
  const sql = 'SELECT * FROM categories ORDER BY category_name';
  const result = await pool.query(sql);
  return result.rows;
}

module.exports = {
  getCategories
};
