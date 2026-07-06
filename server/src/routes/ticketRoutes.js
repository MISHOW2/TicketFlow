import express from "express";
import { tickets } from "../data/tickets.js";
import { authenticate } from "../middlewares/authMiddleWare/authenticate.js";
import { validateFieldInputs } from "../validation/validateFieldInputs.js";
const router = express.Router();

router.get('/', (req,res)=>{
  res.send({tickets})
})

router.post('/:id', (req,res)=>{

})

router.post('/', authenticate, (req, res) => {
  const { title, description, priority, categoryId } = req.body;

  try {
    validateFieldInputs({ title, description, priority, categoryId });

    //
    res.status(201).json({ message: "Ticket created" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router
