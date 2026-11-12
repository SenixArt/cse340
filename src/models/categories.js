import pool from '../database/db.js'; // O ajusta la ruta si tu db usa otra extensión

export async function getCategories() {
  const sql = 'SELECT * FROM categories ORDER BY category_name';
  const result = await pool.query(sql);
  return result.rows;
}
