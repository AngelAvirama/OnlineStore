const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Obtener todos los productos
router.get('/', async (req, res) => {
   try {
      const products = await Product.find();
      res.json(products);
   } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos' });
   }
});

// Obtener producto por ID
router.get('/:id', async (req, res) => {
   try {
      const product = await Product.findById(req.params.id);
      res.json(product);
   } catch (error) {
      res.status(404).json({ error: 'Producto no encontrado' });
   }
});

// Crear producto
router.post('/', async (req, res) => {
   try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
   } catch (error) {
      res.status(400).json({ error: 'Error al crear producto' });
   }
});

// Actualizar producto
router.put('/:id', async (req, res) => {
   try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(product);
   } catch (error) {
      res.status(400).json({ error: 'Error al actualizar producto' });
   }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
   try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Producto eliminado' });
   } catch (error) {
      res.status(400).json({ error: 'Error al eliminar producto' });
   }
});

module.exports = router;
