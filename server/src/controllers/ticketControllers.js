import * as ticketRepository from "../repositories/ticketRepository.js";
import { validateFieldInputs } from "../validation/validateFieldInputs.js";

export const createTicketHandler = async (req, res) => {
  try {
    const { title, description, priority, categoryId } = req.body;

    validateFieldInputs({ title, description, priority, categoryId });

    const ticket = ticketRepository.insertTicket({
      title,
      description,
      priority,
      categoryId,
      createdBy: req.user.id
    });

    res.status(201).json({ message: "Ticket created", ticket });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTicket = (req,res)=>{
  
}
