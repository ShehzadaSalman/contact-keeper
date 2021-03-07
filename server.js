const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res ) => res.json({
    msg: "Welcome to the Contact Keeper API..."
}) )

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contact', require('./routes/contact'))


app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))


  