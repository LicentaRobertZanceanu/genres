import mongoose from 'mongoose'

const GenresSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    lastFmTag: { type: String, unique: true }
})

export const GenresModel = mongoose.model('Genres', GenresSchema)
