require('dotenv').config()
require('express-async-errors')

const express = require('express');
const app = express();

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')


const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler');
const { getAllProducts } = require('./controllers/products');

// Middleware
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send('<h1>store api</h1><a href="/api/v1/products">products route</a> ')
})

app.use('/api/v1/products', productsRouter)

// Products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        // Connect to Database
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()