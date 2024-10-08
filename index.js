const express = require('express');
const mongoose = require('mongoose');
const Booking = require('./models/booking.model');
const app = express();



app.use(express.json());


mongoose.connect('mongodb+srv://mutsamwirarutendo:5qz1VXVrm1ZWrlsi@backenddb.wheqf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to the database!');

    // Define routes only after successful DB connection
    app.get('/', (req, res) => {
      res.send('Hello from Node API');
    });



    app.post('/api/bookings', async (req, res) => {
     try {

        const booking = await Booking.create(req.body);
        res.status(200).json(booking);
     }catch (erroe) {
        res.status(500).json({message: error.message});
     }
     
    });
    // Start server only after successful DB connection
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Connection Failed:', err);
  });
