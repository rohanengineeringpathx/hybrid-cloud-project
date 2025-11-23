const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample products data
const products = [
  { id: 1, name: 'MacBook Pro', price: 1299, category: 'Electronics', image: '💻' },
  { id: 2, name: 'iPhone 14', price: 799, category: 'Electronics', image: '📱' },
  { id: 3, name: 'Programming Book', price: 29, category: 'Books', image: '📚' },
  { id: 4, name: 'Coffee Mug', price: 15, category: 'Home', image: '☕' },
  { id: 5, name: 'Wireless Headphones', price: 199, category: 'Electronics', image: '🎧' }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Products Service is running!' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'products-service' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🛍️  Products service running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`📋 API endpoints:`);
  console.log(`   GET /products - All products`);
  console.log(`   GET /products/:id - Single product`);
  console.log(`   GET /health - Health check`);
});