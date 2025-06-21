import mongoose from 'mongoose'

const eliteFourSchema = new mongoose.Schema({
    eliteFourName: {
    type: String, required: true
    },
    specialty: {
        type: String, // Ice, Fighting, Ghost, Dragon
    },  
    region: {
        type: String,
    },
})

export default mongoose.model('EliteFour', eliteFourSchema)