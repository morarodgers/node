const express = require('express');
const path = require('path')
const {products} = require('./data')
const app = express()
//let {people} = require('./data')

const people = require('./routes/people')

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

// Setting up static middleware
//app.use(express.static('./methods-public'))
app.use(express.static('./public-folder'))

// Parse the form data
app.use(express.urlencoded({extended: false}));

// Parse json
app.use(express.json());

app.use("/api/v1/people", people);

//app.get('/api/v1/people', (req, res) => {
//    res.status(200).json({ success: true, data: people})
//    console.log('It worked!')
//})

//app.post('/api/v1/people', (req, res) => {
//    //console.log(req.body)
//    const {name} = req.body
//    if (name) {
//        people.push({ id: people.length, neame: req.body.name });
//        res.status(201).json({ success: true, name: req.body.name });
//    }
//    res.status(400).json({success: false, message: 'Please provide a name'});
//})

// Return a JSON formatted output
app.get('/api/v1/test', logger, (req, res) => {
    console.log('User tapped the resource')
    res.json({message: 'It wordked!'})
})

// Return an array of data
app.get('/api/v1/products', logger, (req, res) => {
    res.json(products)
})

// Return a particular product by ID
app.get('/api/v1/products/:productID', logger, (req, res) => {
    const idToFind = parseInt(req.params.productID)
    const product = products.find ((p) => p.id === idToFind)
    
    if (!product) {
        return res.status(404).send('That Product was not found ')
    }
    res.json(product)
})

// Simple search by user 
app.get('/api/v1/query', logger, (req, res) => {

    const {search, limit, regExpression, minPrice, maxPrice} = req.query
    let sortedProds = [...products]
    
    // Searching for a product
    if (search) {

        // Searching with a regular expression
        if (regExpression && regExpression === 'true') {
            const regExPattern = new RegExp(search, 'i');
            sortedProds = sortedProds.filter((product) => {
                return regExPattern.test(product.name);
            });
        }

        // Filter search with a certain initial letter
        else {
            sortedProds = sortedProds.filter((product) => {
                return product.name.startsWith(search);
            });
        }
    }

    // Filter searched item by maximum price
    if (maxPrice) {
        sortedProds = sortedProds.filter((product) => {
            return product.price < Number(maxPrice);
        });
    }

    // Filter searched item by minimum price
    if (minPrice) {
        sortedProds = sortedProds.filter((product) => {
            return product.price > Number(minPrice);
        });
    }

    // Providing a limit for the number of products to display
    if (limit) {
        sortedProds = sortedProds.slice(0, Number(limit))
    }

    // When searched products cannot be found
    if (sortedProds.length < 1) {
        //return res.status(200).json({Success: true, data: [] })
        return res.status(200).send('No products matched your search')
    }
    res.status(200).json(sortedProds)
})

// Handling not found resources
app.all('*', (req, res) => {
    res.status(404).send('<h1> Resource not found</h1>')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})