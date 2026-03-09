import mongoose, { Schema } from 'mongoose';

const ticketSchema = new Schema({
    title: String,
    description: String,
    status:{ String, default: "TODO" },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", dfault: null },
    priority: String,
    deadline: Date,
    helpfullNotes: String,
    relatedSkills: [String],
    createdAt: { type: Date, default: Date.now }
})

export const Ticket = mongoose.model("Ticket", ticketSchema)