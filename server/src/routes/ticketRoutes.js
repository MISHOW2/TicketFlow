import express from "express";
import { tickets } from "../data/tickets.js";
import { authenticate } from "../middlewares/authMiddleWare/authenticate.js";
import { validateFieldInputs } from "../validation/validateFieldInputs.js";
import { createTicketHandler, updateTicket } from "../controllers/ticketControllers.js";
const router = express.Router();

router.get('/', (req,res)=>{
  res.send({tickets})
})

router.post('/:id', (req,res)=>{

})

router.post('/', authenticate,createTicketHandler );
router.patch('/:id',authenticate, updateTicket )
export default router
