const { Schema, default: mongoose } = require("mongoose");


const SubscriberSchema = new Schema({

    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date,
        default: Date.now()
    },
    unsubscribed: {
        required: true,
        type: Boolean,
        default: false
    }

})

export const Subscriber = mongoose.models.Subscriber ?? mongoose.model("Subscriber", SubscriberSchema)