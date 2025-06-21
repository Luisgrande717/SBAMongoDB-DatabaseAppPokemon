import mongoose from 'mongoose'

const gymSchema = new mongoose.Schema({
  gymName: { 
    type: String,
    required: true 
  },
  gymLocation: {
    type: String,
  },
  badgeName: {
    type: String,
  },
  gymLeader: {
    type: String,
  } 
})

export default mongoose.model('PokeGym', gymSchema)