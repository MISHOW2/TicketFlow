import express from 'express'

// use express method
const app = express();
const PORT =  5000;


app.get('/', (req, res) => {
  res.send('TicketFlow API is running');
});
