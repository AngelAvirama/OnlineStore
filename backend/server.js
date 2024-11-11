const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado'))
  .catch(error => console.error(error));

// Rutas de productos
app.use('/api/products', require('./routes/products'));

app.listen(PORT, () => {
   console.log(`Servidor en el puerto ${PORT}`);
});
