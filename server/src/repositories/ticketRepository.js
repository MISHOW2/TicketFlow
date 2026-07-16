import { tickets } from "../data/tickets.js";

export const insertTicket = ({
  title,
  description,
  priority,
  categoryId,
  createdBy,
}) => {
  const newTicket = {
    id: tickets.length
      ? Math.max(...tickets.map(ticket => ticket.id)) + 1
      : 101,
    title,
    description,
    status: "open",
    priority,
    categoryId,
    createdBy,
    assignedTo: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    resolvedAt: null,
  };

  tickets.push(newTicket);

  return newTicket;
};


