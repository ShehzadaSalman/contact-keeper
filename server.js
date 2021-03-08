const express = require('express');
const connectDB = require('./config/db')
const app = express();
const PORT = process.env.PORT || 5000

// Connect Database
connectDB();

// init middleware to access data in the request
app.use(express.json({extended: false}))

app.get('/', (req, res ) => res.json({
    msg: "Welcome to the Contact Keeper API..."
}) )

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contact', require('./routes/contact'))


app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))


  