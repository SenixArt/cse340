-- Crear tabla de categorías
CREATE TABLE IF NOT EXISTS categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

-- Crear tabla intermedia para la relación de muchos a muchos
CREATE TABLE IF NOT EXISTS project_categories (
  project_id INT REFERENCES projects(project_id) ON DELETE CASCADE,
  category_id INT REFERENCES categories(category_id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, category_id)
);

-- Insertar las 3 categorías obligatorias
INSERT INTO categories (category_name) VALUES 
  ('Education'), 
  ('Environment'), 
  ('Community Support');

-- Asociar los proyectos a las categorías
INSERT INTO project_categories (project_id, category_id) VALUES 
  (1, 1),
  (2, 2),
  (3, 3);
