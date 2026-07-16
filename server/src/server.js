import express from 'express';
import dotenv from 'dotenv';

import cors from "cors";
import authRoutes from './routes/authRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js'

 
dotenv.config();

const app = express();
const PORT = process.env.PORT;
  app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TicketFlow API is running');
});

app.use('/api/auth/', authRoutes)
app.use('/api/tickets/', ticketRoutes)
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
