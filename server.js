const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
// Use routes
app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/inventory', inventoryRoutes);

app.use(cors({
  origin: 'https://lalita.vercel.app', // replace with your frontend's deployed URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed HTTP methods
 
}));

mongoose.connect(
  'mongodb+srv://faydahyahya93:jyfdash4615@lalita.sfrmii9.mongodb.net/?appName=LALITA',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => console.log(err));
