import mongoose from 'mongoose'

const pokemonSchema = new mongoose.Schema({
    pokemonName : {
        type: String,
        required: true
    },
    pokemonType : {
        type: String,
    },
    pokemonLevel: {
        type: Number,
        default: 1
    }
})

export default mongoose.model('Pokemon', pokemonSchema)