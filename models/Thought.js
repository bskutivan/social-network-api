const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ThoughtSchema = new Schema (
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: [ 1, 'Must include at least one character!'],
        maxlength: [ 280, 'Must be less than 280 characters!']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use getters to make date into something not hideous
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: []
}
)