const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const Comment = require('./models/Comment');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const genreRoutes = require('./routes/genreRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const commentRoutes = require('./routes/commentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reportRoutes = require('./routes/reportRoutes');
const imageRoutes = require('./routes/imageRoutes');
const miniImageRoutes = require('./routes/miniImageRoutes');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json());

// ROUTES
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/genres', genreRoutes);
app.use('/products', productRoutes);
app.use('/ratings', ratingRoutes);
app.use('/comments', commentRoutes);
app.use('/orders', orderRoutes);
app.use('/reports', reportRoutes);
app.use('/images', imageRoutes);
app.use('/minis', miniImageRoutes);


// STRIPE CONNECTION
// app.post("/create-payment-intent", async (req, res) => {
//     const { price } = req.body;
    
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: Number(price),
//         currency: "usd",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     });

//     res.status(200).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));
  

  // Use comment routes with the '/api/comments' prefix
  app.use('/api/comments', commentRoutes);
  
  app.get('/api/comments/',)




// Root route to get all comments
app.get('/', async (req, res) => {
  try {
    const allComments = await User.find({}); // Directly use the Comment model here
    res.status(200).json(allComments); // Return comments as JSON
  } catch (error) {
    console.error(error); // Log the error for debugging

    res.status(500).json({ status: 'failed', error: error.message }); // Handle errors
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});