import { GenresModel } from '../genres-model.js'

export const getGenres = (req, res) => {
    GenresModel.find({}, (err, docs) => {
        if (err) {
            res.status(404).json({ message: 'Error!' })
            return
        } else {
            res.json(docs)
        }
    })
}