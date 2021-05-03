import { GenresModel } from '../genres-model.js'

const genres = [
    {
        name: 'Rock',
        lastFmTag: 'rock'
    }, {
        name: 'Electronic',
        lastFmTag: 'electronic'
    }, {
        name: 'Hip hop',
        lastFmTag: 'hip-hop'
    }, {
        name: 'Indie',
        lastFmTag: 'indie'
    }, {
        name: 'Jazz',
        lastFmTag: 'jazz'
    }, {
        name: 'Reggae',
        lastFmTag: 'reggae'
    }, {
        name: 'Punk',
        lastFmTag: 'punk'
    }, {
        name: 'Dance',
        lastFmTag: 'dance'
    }, {
        name: 'Pop',
        lastFmTag: 'pop'
    }, {
        name: 'Rap',
        lastFmTag: 'rap'
    }, {
        name: 'Disco',
        lastFmTag: 'disco'
    }
]

export const addGenres = (req, res) => {
    GenresModel
        .insertMany(genres)
        .then(() => {
            res.json({ message: 'Genres were added successfully!' })
        })
        .catch(error => {
            res.status(400).json({ message: error })
        })
}