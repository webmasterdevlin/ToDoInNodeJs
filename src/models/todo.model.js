import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    title: {
        type: String
    },
    isDone: {
        type: Boolean,
    },
    deadLine: {
        type: Date,
    }
}, {
    timestamps: true
});