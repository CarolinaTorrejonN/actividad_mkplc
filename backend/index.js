const express = require("express");
const { Pool } = require('pg');
    const cors = require("cors");
    const app = express();
    const port = 5000;
    app.use(cors());
    app.use(express.json());
    const pool = new Pool({  
    host: "localhost",
    user: "postgres", // Cambia esto según tu usuario de MySQL
    password: "kako2024", // Cambia esto según tu contraseña de MySQL
    database: "joyas", // Cambia esto según el nombre de tu base de datos
    });
    // Endpoint para obtener todos los productos
    app.get('/api/products', async (req, res) => {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
      });
      
      app.get('/api/products/:id', async (req, res) => {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        res.json(result.rows[0]);
      });
      
    // Endpoint para obtener un producto por ID
    
    // Iniciar el servidor
    app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    });