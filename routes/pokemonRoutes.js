import express from 'express'
import Pokemon from '../models/pokemon.js'

const router = express.Router()

// Get all Pokémon
router.get('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.find()
        res.json(pokemon)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Add a new Pokémon
router.post('/', async (req, res) => {
    console.log('Incoming data:', req.body)
    try {
        const newPokemon = new Pokemon(req.body)
        const savedPokemon = await newPokemon.save()
        res.status(201).json(savedPokemon)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

})

// Update a Pokémon
router.patch('/:id', async (req, res) => {
  try {
    const updatedPokemon = await Pokemon.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!updatedPokemon) return res.status(404).json({ error: 'Pokémon not found' })
    res.json(updatedPokemon)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Delete a Pokémon
router.delete('/:id', async (req, res) => {
  try {
    const deletedPokemon = await Pokemon.findByIdAndDelete(req.params.id)
    if (!deletedPokemon) return res.status(404).json({ error: 'Pokémon not found' })
    res.json({ message: `${deletedPokemon.pokemonName} was deleted.` })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

export default router