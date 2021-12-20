import mongoose from 'mongoose';
const tourSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db

    {

        title: String,
        description: String,
        seats: String,
        available: String,
        images: [
            {
                type: String,
            },
        ],
        dateScheduled: String,
        dueDate: String,
        phone: String,
        price: String,
        user: {
            name: String,
            phone: String
        },
        tripDescription: String,
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        }
    },

    {
        timestamps: true,  // means it has been stored
    }

);

    tourSchema.pre(/^find/, function (next) {

        this.populate({
            path: "user",
            select: "lastName email address"
        });
        next();
        
    }
    )
        
        const tour = mongoose.model('Tour', tourSchema)

export default tour;







