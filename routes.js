import { checkAuthentication } from './globals/functions/index.js'
import { addGenres, getGenres } from './controllers/index.js'

export const routes = (app) => {
    app.route('/genres')
        .post(checkAuthentication, addGenres)
        .get(checkAuthentication, getGenres)
}