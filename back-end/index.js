// importing express
const express = require('express');
const userRouter = require('./routers/userRouter');
const compRouter = require('./routers/compRouter');
const cors = require('cors');

// initiliazing express
const app = express();

const port = 5000;

// middleware
// this will parse JSON data to javaScript
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));

app.use('/user', userRouter);
app.use('/comp', compRouter);

// route
app.get('/', (req, res) => {
    res.send('Response from express');
})

// route or endpoint
app.get('/home', (req, res) => {
    res.send('Response from home');
})

app.listen(port, () => {
    console.log('server has started');
});
